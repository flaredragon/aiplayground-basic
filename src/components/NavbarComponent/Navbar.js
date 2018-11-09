import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const navbar = () => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">AI Playground</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    Learn AI
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Docs
                </NavItem>
                <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Link 1</MenuItem>
                    <MenuItem eventKey={3.2}>Link 2</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default navbar;