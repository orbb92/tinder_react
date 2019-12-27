
import UserComponent from './UserComponent'
import TinderButtons from './TinderButtons'

//import css from '../App.css'


import Spinner from 'react-bootstrap/Spinner'
import React from 'react'





const TinderMatch = (params) => {

    return (

        <div className='container' style={{ height: '80vh' }}>


            <div className='row'>

                {params.Property!==1? <div className='col-12'>
                    {/* {params.Users[params.index]} */}
                   
                    
                       
                <UserComponent item= {params.Property}></UserComponent>
                        
                    <div className='col-12' style={{ position: 'fixed', left: '0', bottom: '1vh' }}>
                        <TinderButtons PropertySet={params.PropertySet} addLiked={params.addLiked} item={params.Users[params.index]} num={parseInt(params.index) + 1}></TinderButtons>
                    </div></div> : <div style={{ paddingTop: '100px', width: "100%", objectFit: "contain " }} ><Spinner style={{ height: '20vh', width: '20vh' }} animation="grow" variant="info"></Spinner><br></br><h5>Looking for new users...</h5><h7>Or change ajustments under profile</h7></div>}



            </div>

        </div>

    )
}
export default TinderMatch;

