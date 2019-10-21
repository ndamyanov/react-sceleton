import React from 'react';

const Toolbar = () => (
    <nav className="header navbar navbar-expand-sm navbar-dark bg-react-black" id="header">
        <div className="container">
            <div className="navbar-brand">
                <i className="fa fa-truck fa-2x align-middle mr-2 text-react-blue"></i>
                <span className="align-middle text-react-blue">My Freights</span>
            </div>
            <div className="navbar-brand">
                <i className="fa fa-align-justify fa-2x align-middle mr-2 text-react-blue"></i>
                <span className="align-middle text-react-blue">Todo</span>
            </div>
            <div className="navbar-brand">
                <i className="fa fa-sign-out fa-2x align-middle mr-2 text-react-blue"></i>
                <span className="align-middle text-react-blue">Log out</span>
            </div>
        </div>
    </nav>
);

export default Toolbar;