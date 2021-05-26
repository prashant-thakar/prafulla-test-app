import React, { Component } from 'react';
import { Carousel, Nav, Navbar } from 'react-bootstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            setIndex: 0
        };
    }
    render() {
        return (<>
            <div className="header-menu">
                <div className="top-section">
                    <div className="container">
                        <div className="row">
                            <div className="col text-right">
                                <a href="#home" className="d-none d-sm-inline-block">Search</a>
                                <a href="#link" className="d-none d-sm-inline-block">Contact</a>
                                <a href="#search" className="d-inline-block d-sm-none"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg></a>
                                <a href="#link">Welcom Praphulla</a>
                                <a href="#link" className="d-none d-sm-inline-block">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-section">
                    <div className="container">
                        <Navbar expand="lg">
                            <Navbar.Brand href="#home">
                                <img src="./assets/image/logo.jpg" alt="" />
                            </Navbar.Brand>
                            <div className="d-block d-sm-none"></div>
                            <Navbar.Toggle aria-controls="basic-navbar-nav ml-auto" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link className="active" href="#home">Service</Nav.Link>
                                    <Nav.Link href="#link">Reporting</Nav.Link>
                                    <Nav.Link href="#link">Account</Nav.Link>
                                    <Nav.Link href="#link">Support</Nav.Link>
                                    <Nav.Link href="#link" className="d-block d-sm-none logout">Logout</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
                <div className="secondery-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="d-menu d-none d-sm-block">
                                    <a href="#test">Site summary</a>
                                    <a href="#test">Visits</a>
                                    <a href="#test">Pest activity</a>
                                    <a href="#test" className="active">Recommendations</a>
                                    <a href="#test">Tasks</a>
                                    <a href="#test">Preprations</a>
                                    <a href="#test">Site plans</a>
                                    <a href="#test">Documents</a>
                                </div>
                                <div className="m-menu d-block d-sm-none">
                                    <Carousel controls={false} interval={null}>
                                        <Carousel.Item>
                                            Site summary
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            Visits
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            Pest activity
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
    }
}

export default Header;