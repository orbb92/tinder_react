import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
const myStyle = {
    marginRight: '2vh',
    color: 'black',
    hover: {
        fontWeight: 'bold'
    }

}

const TinderSidebar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand >Tinder</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink style={myStyle} activeStyle={{ fontWeight: 'bold' }} exact to="/">Home</NavLink>
                    <NavLink style={myStyle} activeStyle={{ fontWeight: 'bold' }} to="/profile">Profile</NavLink>
                    <NavLink style={myStyle} activeStyle={{ fontWeight: 'bold' }} to="/match/0">Find Match</NavLink>

                    <NavLink style={myStyle} activeStyle={{ fontWeight: 'bold' }} to="/likes/0">My likes</NavLink>


                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}
export default TinderSidebar
