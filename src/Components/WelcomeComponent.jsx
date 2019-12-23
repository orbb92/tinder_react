import React from 'react'
import style from '.././welcome.css'

export default function WelcomeComponent() {
    return (
        <div>
            {/* <div style={{border:"1px solid red",backgroundColor:"green", position:"relative",zIndex:"-2",width:"100vh"}}>sadasdsdadasdass</div> */}




        <div className="container" style={{position:"absolute",top:"40%",left:"50%",transform:"translate(-50%,-50%)",display:"block",fontSize:"5vh",zIndex:"1",backgroundColor:"red",borderRadius:"1vh",boxShadow:"10px 5px grey"}} >
            <div className='row'>
                <div className="col">
                <span className="text1" style={{display:"block",letterSpacing:"2vh",animation:"text 2s 1",position:"relative",fontSize:"10vh",fontWeight:"bold"}}>Welcome</span>
                <span className="text2" style={{display:"block"}}>to my meeting app!</span>
                
                
                </div>
                
            </div>
            
        </div>
        
        </div>
    )
}
