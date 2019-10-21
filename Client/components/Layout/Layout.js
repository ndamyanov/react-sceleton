import React, { Component } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import SideMenu from '../SideMenu/SideMenu';
import Shipper from '../Shipper/Shipper';
import Aux from '../../hoc/_Aux';

class Layout extends Component {


    render() {
        return (
            <Aux>
                <Toolbar />
                <SideMenu />
                <Shipper />
            </Aux>
        );
    }
}

export default Layout;