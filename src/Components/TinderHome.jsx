import React, { Component } from 'react'
//import { appUsers } from '../appUsers'
import {Users,Premium} from '../appUserClass'
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
                        Users: result.map(item => item.Premium===true? new Premium(item.Id, item.Username, item.Age, item.Distance, item.Gender, item.Job, item.Img,item.Premium,item.Hobbies):new Users(item.Id, item.Username, item.Age, item.Distance, item.Gender, item.Job, item.Img,item.Premium))

                    })

                },
                (error) => {
                    //   console.log("err post=", error);
                });
    }

    componentDidMount() {
       
        this.apiUrl = 'http://proj.ruppin.ac.il/igroup10/Mobile/server/api/tinderuser'
        //'';
        this.FetchGetUsers();


    }




    constructor(props) {
        super(props);

        this.state = {

            Users: [],
            myLikes: null,
            Filter: [],
            Property: [""],
            adjustedUsers: [],
           


        };

    }

    myAdjustments = (e) => {
        this.setState({
            myLikes: [],
            Filter: e,
            adjustedUsers: this.state.Users.filter(item => item.distance > e.minDis && item.distance < e.maxDis && item.age > e.minAge && item.age > e.minAge && item.gender === e.gender),
            
            Property: (this.state.Users.filter(item => item.distance > e.minDis && item.distance < e.maxDis && item.age > e.minAge && item.age > e.minAge && item.gender === e.gender))[0]



        })



    }

    

    PropertySet = (num) => {
       
      console.log("im set")
      if(num<this.state.adjustedUsers.length)
        this.setState({
            Property:this.state.adjustedUsers[num]
            
        })
    }





    addLiked = (item) => {
    
       
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
                    
                },
                (error) => {
                    console.log("err post=", error);
                });

        this.setState({

            myLikes: this.state.myLikes.concat(item),

        })

    }


    render() {
        


        

        return (

            <Router>
                {console.log(this.state.Filter)}
                <div className='row' style={{}}>

                    <div style={{ width: '100%' }}>
                        <TinderSidebar ></TinderSidebar>
                    </div>
                    <Route path='/' exact strict>
                        {<Welcome></Welcome>}
                    </Route>
                    <div className='col-12'>
                        <Route path='/profile' exact>
                            {<TinderProfile Adj={this.state.Filter} Adjustments={this.myAdjustments}></TinderProfile>}
                        </Route>
                    </div>
                   
                    <div className='col-12'>
                        <Route path='/match/:index' exact strict
                            render={({ match }) => (<TinderMatch index={match.params.index} Users={this.state.adjustedUsers} addLiked={this.addLiked} Property={this.state.Property} PropertySet={this.PropertySet} />)}>


                        </Route>
                    </div>
                    <div className='col-12'>
                       
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
