import React  from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
const myStyle = {
    marginRight: '2vh',
    color: 'black',
    hover: {
        fontWeight: 'bold'
    }

}
var beep=new Audio()
beep.src='http://www.pachd.com/a/button/button5.wav' 
const sound=()=>{
beep.play()
}

const TinderSidebar = (props) => {
    return (
        
        <Navbar  style={{backgroundImage:"linear-gradient(white,pink,white)"}} expand="sm">
            <Navbar.Brand > <img style={{height:"4vh"}}  src="https://www.freepngimg.com/thumb/heart/67630-heart-love-logo-png-download-free.png" alt="pic"></img>Tinder</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink onClick={sound} style={myStyle} activeStyle={{ fontWeight: 'bold' }} exact to="/">Home</NavLink>
                    <NavLink onClick={sound} style={myStyle} activeStyle={{ fontWeight: 'bold' }} to="/profile">Profile</NavLink>
                    <NavLink onClick={sound} style={myStyle} activeStyle={{ fontWeight: 'bold' }} to={"/match/"+props.num}>Find Match</NavLink>

                    <NavLink  onClick={sound}style={myStyle} activeStyle={{ fontWeight: 'bold' }} to="/likes/0">My likes</NavLink>


                </Nav>

            </Navbar.Collapse>
        </Navbar>
        
    )
}
export default TinderSidebar
