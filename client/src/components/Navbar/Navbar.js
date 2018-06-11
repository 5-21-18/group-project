import React from 'react';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, FormGroup } from 'react-bootstrap';

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
                    <Form inline>
                        <FormGroup controlId="form">
                            <FormControl type="text" placeholder="Search"/>
                        </FormGroup>
                
                    </Form>
                </div>
            </Navbar>
        );
    }
}