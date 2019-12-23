import React from 'react'
import Adjustments from '../Components/TinderProfileComps/Adjustments'
import MyAdj from '../Components/TinderProfileComps/MyAdj'


const TinderProfile = (props) => {


  return (
    <div className="container">
      <div className='row' style={{ height: '100%' }}>

        <div className="col-6" style={{ textAlign: 'left' }}>
          <img style={{ height: "100%", width: "100%", objectFit: "contain " }} src='https://content.oppictures.com/Master_Images/Master_Variants/Variant_1500/289020.JPG' alt='myPic'></img>
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
    </div>
  )
}
export default TinderProfile;
