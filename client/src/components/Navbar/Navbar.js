import React from 'react';
import Searchbar from '../searchbar.js';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class CamiBookNav extends React.Component {
    render() {
        return(
            <Navbar inverse className="navbar">
                <div>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <p id="brandName">CamiBooks</p>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem>
                            <a href="/login" id="link">Login</a>
                        </NavItem>
                        <NavItem>
                            <a href="/profile" id="link">Profile</a>
                        </NavItem>
                    </Nav>
                </div>
                <div>
                    <Searchbar />
                </div>
            </Navbar>
        );
    }
}