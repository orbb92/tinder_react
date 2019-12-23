import React from 'react'
import UserComponent from './UserComponent'
import ReactTrans from 'react-addons-css-transition-group'

const TinderLikes=(params)=> {
    return (
      <div className='container' style={{height:'70vh'}}>
      <div className='row'>
      
   {/* <ReactTrans
   transitionName="fade"
   transitionEnterTimeout={300}
   transitionLeaveTimeout={300}> */}
       {params.myLikes.map(item=>{return(
         <div key={item.id} className='col-4' >
           <UserComponent item={item}></UserComponent>
         </div>
       )})}
      {/* // </ReactTrans> */}
     
     
      </div>

  </div>
    )
}
export default TinderLikes;

 