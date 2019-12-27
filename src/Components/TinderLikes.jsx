import React from 'react'
import UserComponent from './UserComponent'


const TinderLikes = (params) => {
  return (
    <div className='container' style={{ height: '70vh' }}>
      
{params.myLikes===null  ?
<div style={{fontSize:"2rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>You have no likes!</div>
      :<div className='row'>
      {params.myLikes.map(item => {
        return (
          <div key={item.id} className='col-4' >
            <UserComponent item={item}></UserComponent>
          </div>
        )
      })}
    </div>
          }
    </div>
  )
}
export default TinderLikes;

