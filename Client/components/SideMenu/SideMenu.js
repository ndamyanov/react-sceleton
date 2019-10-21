import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import NoteManager from '../Notes/NoteManager';
import CreateShipment from '../Shipper/CreateShipment/CreateShipment';

class Menu extends Component {

    state = {
        showNotes: false
    }

    openDashboardHandler = () => {
        console.log(this.state.showNotes);
        this.setState({
            showNotes: !this.state.showNotes
        });
    }

    render() {


        return (
            <Router>
                <div className="nav-side-menu">
                    <div className="brand">My Freights</div>
                    <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
                    <div className="menu-list">
                        <ul id="menu-content" className="menu-content collapse out">
                            <li>
                                <Link className="fa fa-list fa-lg" to="/myshipments"> My shipments</Link>
                            </li>
                            <li onClick={this.openDashboardHandler}>
                                <Link className="fa fa-dashboard fa-lg" to="/createshipment"> Create new shipment</Link>
                            </li>
                            <li data-toggle="collapse" data-target="#products" className="collapsed active">
                                <a href="#"><i className="fa fa-gift fa-lg"></i> UI Elements <span className="arrow"></span></a>
                            </li>
                            <ul className="sub-menu collapse" id="products">
                                <li className="active"><a href="#">CSS3 Animation</a></li>
                                <li><a href="#">General</a></li>
                                <li><a href="#">Buttons</a></li>
                                <li><a href="#">Tabs </a></li>
                                <li><a href="#">Typography</a></li>
                                <li><a href="#">FontAwesome</a></li>
                                <li><a href="#">Slider</a></li>
                                <li><a href="#">Panels</a></li>
                                <li><a href="#">Widgets</a></li>
                                <li><a href="#">Bootstrap Model</a></li>
                            </ul>
                            <li data-toggle="collapse" data-target="#service" className="collapsed">
                                <a href="#"><i className="fa fa-globe fa-lg"></i> Services <span className="arrow"></span></a>
                            </li>
                            <ul className="sub-menu collapse" id="service">
                                <li>New Service 1</li>
                                <li>New Service 2</li>
                                <li>New Service 3</li>
                            </ul>
                            <li data-toggle="collapse" data-target="#new" className="collapsed">
                                <a href="#"><i className="fa fa-car fa-lg"></i> New <span className="arrow"></span></a>
                            </li>
                            <ul className="sub-menu collapse" id="new">
                                <li>New New 1</li>
                                <li>New New 2</li>
                                <li>New New 3</li>
                            </ul>
                            <li>
                                <a href="#">
                                    <i className="fa fa-user fa-lg"></i> Profile
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-users fa-lg"></i> Users
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container mt-5" id="notes" >
                    <Switch>
                        <Route exact path="/">
                            {/* <Home /> */} <p>home</p>
                        </Route>
                        <Route path="/about">
                            {/* <About /> */} <p>about</p>
                        </Route>
                        <Route path="/myshipments">
                            <NoteManager />
                        </Route>
                        <Route path="/createshipment">
                            <CreateShipment/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Menu;