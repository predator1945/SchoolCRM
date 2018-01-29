import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavigationBar extends Component {

    constructor(props) {
        super(props);

        this.state = { page: "" };
    }

    render() {
        return (
            <div className="constainer">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/"> WILSON </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Nav>
                        <ul className="nav navbar-nav">
                            <li><Link to="/classes"> Classes </Link></li>
                            <li><Link to="/classrooms"> Classrooms </Link></li>
                            <li><Link to="/grades"> Grades </Link></li>
                            <li><Link to="/lessons"> Lessons </Link></li>
                            <li><Link to="/parents"> Parents </Link></li>
                            <li><Link to="/pupils"> Pupils </Link></li>
                            <li><Link to="/subjects"> Subjects </Link></li>
                            <li><Link to="/teachers"> Teachers </Link></li>
                        </ul>
                    </Nav>
                </Navbar>
                
            </div>
        );
    }
}





