import React from 'react'
import Adjustments from '../Components/TinderProfileComps/Adjustments'
import MyAdj from '../Components/TinderProfileComps/MyAdj'
import {Spring} from 'react-spring/renderprops'


const TinderProfile = (props) => {


  return (
    <Spring from={{opacity:0}}
        
    to={{opacity:1}}>{propsa=>(<div style={propsa}> <div className="container">
    <div className="row">
    <div className="col-12"><h1>Hi dater!</h1></div>
    </div>
    <div className='row' style={{ height: '100%' }}>

      <div className="col-6" style={{ textAlign: 'left' }}>
        <img style={{ height: "100%", width: "100%", objectFit: "contain " }} src='https://cdn1.iconfinder.com/data/icons/healthcare-medical-16/128/_Options_settings_wrench_health_heart_love_medical_-512.png' alt='myPic'></img>
      </div>
      <div className='col-6'>

        <Adjustments Adjustments={props.Adjustments}></Adjustments>

      </div>

    </div>
    <div className="row">
      <div className='col-12'>

        <MyAdj Adj={props.Adj}></MyAdj>

      </div>
    </div>
  </div></div>)}
   
    </Spring>
  )
}
export default TinderProfile;
