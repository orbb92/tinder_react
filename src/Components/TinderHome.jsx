import React, { Component } from 'react'
//import { appUsers } from '../appUsers'
import User from '../appUserClass'
import TinderProfile from './TinderProfile'
import TinderMatch from './TinderMatch'
import TinderLikes from './TinderLikes'
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import TinderSidebar from './TinderSidebar';
import Welcome from '../Components/WelcomeComponent'



class TinderHome extends Component {
    FetchGetUsers = () => {

        fetch(this.apiUrl, {
            method: 'GET',


        })
            .then(res => {
                //  console.log('res=', res);
                // console.log('res.status', res.status);
                // console.log('res.ok', res.ok);
                return res.json()
            })
            .then(
                (result) => {
                    // console.log(result);
                    this.setState({
                        Users: result.map(item => new User(item.Id, item.Username, item.Age, item.Distance, item.Gender, item.Job, item.Img))

                    })

                },
                (error) => {
                    //   console.log("err post=", error);
                });
    }

    componentDidMount() {
        // console.log("first");
        this.apiUrl = 'http://proj.ruppin.ac.il/igroup10/Mobile/server/api/user';
        this.FetchGetUsers();


    }




    constructor(props) {
        super(props);

        this.state = {

            Users: [],// appUsers.map(item => new User(item.id, item.name, item.age, item.distance, item.job, item.image)),
            adjustedUsers: [],
            myLikes: [],
            Filter: []

        };

    }

    myAdjustments = (e) => {
        this.setState({
            myLikes: [],
            Filter: e,
            adjustedUsers: this.state.Users.filter(item => item.distance > e.minDis && item.distance < e.maxDis && item.age > e.minAge && item.age > e.minAge && item.gender === e.gender)

        })

    }

    addLiked = (item) => {
        console.log("im item", item)
        const user = {
            Username: item.name,
            Gender: item.gender,
            Age: item.age,
            Distance: item.distance,
            Job: item.job,
            Img: item.image,
            Id: item.id

        };
        console.log("im user", user)
        // axios.post(this.apiUrl,user)
        // .then(response=>{
        //     console.log(response)
        // })
        // .catch(error=>{
        //     console.log(error)
        // })

        fetch(this.apiUrl, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: new Headers({
                'Content-type': 'application/json; charset=UTF-8',

                //very important to add the 'charset=UTF-8'!!!!
            })
        })
            .then(res => {
                console.log('res=', res);
                return res.json()
            })
            .then(
                (result) => {
                    console.log("fetch POST= ", result);
                    console.log(result.Avg);
                },
                (error) => {
                    console.log("err post=", error);
                });

        this.setState({

            myLikes: this.state.myLikes.concat(item),

        })

    }


    render() {
        console.log("Im fetch", this.state.Users)
        console.log("im filter", this.state.Filter)

        return (
            <Router>
                <div className='row' style={{}}>

                    <div style={{ width: '100%' }}>
                        <TinderSidebar></TinderSidebar>
                    </div>
                    <Route path='/' exact strict>
                        {<Welcome></Welcome>}
                    </Route>
                    <div className='col-12'>
                        <Route path='/profile' exact>
                            {<TinderProfile Adj={this.state.Filter} Adjustments={this.myAdjustments}></TinderProfile>}
                        </Route>
                    </div>
                    {/* <Route path='/match' exact>
                        <div className='col-12'>{<TinderMatch adjustedUsers={this.state.adjustedUsers}></TinderMatch>}</div>
                    </Route> */}
                    <div className='col-12'>
                        <Route path='/match/:index' exact strict
                            render={({ match }) => (<TinderMatch index={match.params.index} Users={this.state.adjustedUsers} addLiked={this.addLiked} />)}>


                        </Route>
                    </div>
                    <div className='col-12'>
                        {/* <Route path='/likes' exact strict component={TinderLikes}>
                       {<TinderLikes></TinderLikes>}
                    </Route> */}
                        <Route path='/likes/:index' exact strict
                            render={({ match }) => (<TinderLikes index={match.params.index} myLikes={this.state.myLikes} />)}>


                        </Route>
                    </div>

                </div>
            </Router>

        )
    }
}



export default TinderHome
