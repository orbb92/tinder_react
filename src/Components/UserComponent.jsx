import React from 'react'

import {Spring} from 'react-spring/renderprops'
import css from '../App.css'



const UserComponent = (propsa) => {
   
    return (
        <div>
            {console.log("spring")}
        <Spring
        from={{opacity:0}}
        
        to={{opacity:1}}>
            {props => (
                <div style={props}>
                    {console.log("spring1")}
                    <div className='container' >
                       

                        <div className='row'>
                            

                            <div  style={{ margin: 'auto' }}>
                                <img style={{ borderRadius: '10px', objectFit: 'contain', width: '100%', height: '100%' }} src={propsa.item.image} alt='iage'></img>
                            </div>
                           
                        </div>
                        <div className='row'>
                            <div style={{ margin: 'auto' }}>
                                <span style={{ fontSize: '1.5rem' }}>{propsa.item.name}, </span><span style={{ fontSize: '1rem' }}>{propsa.item.age} </span>
                            </div>
                        </div>
                        <div className='row'>
                            <div style={{ margin: 'auto' }}>
                                <span style={{ fontSize: '1.5rem' }}>{propsa.item.job}, </span><span style={{ fontSize: '1rem' }}>{propsa.item.distance}KM away </span>
                                
                            </div>
                        </div>
                        <div className='row'>
                            <div style={{ margin: 'auto' }}>
                                <span style={{ fontSize: '1.5rem' }}>{propsa.item.hobbies}</span>
                                
                            </div>
                        </div>
                        


                    </div>

                </div>
            )}






        </Spring>
        </div>
        
    )
    
}
export default UserComponent
