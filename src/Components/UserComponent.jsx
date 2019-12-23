import React from 'react'

import css from '../App.css'
const UserComponent = (props) => {
    return (
        
        <div>


            <div className='container' >
                <div className='row'>
                    <div style={{margin:'auto'}}>
                        <img style={{ borderRadius: '10px', objectFit: 'contain', width: '100%', height: '100%' }} src={props.item.image} alt='iage'></img>
                    </div>
                </div>
                <div className='row'>
                    <div style={{margin:'auto'}}>
                        <span style={{ fontSize: '1.5rem' }}>{props.item.name}, </span><span style={{ fontSize: '1rem' }}>{props.item.age} </span>
                    </div>
                </div>
                <div className='row'>
                    <div style={{margin:'auto'}}>
                    <span style={{ fontSize: '1.5rem' }}>{props.item.job}, </span><span style={{ fontSize: '1rem' }}>{props.item.distance}KM away </span>
                    </div>
                </div>

            </div>
        </div>
      
    )
}
export default UserComponent
