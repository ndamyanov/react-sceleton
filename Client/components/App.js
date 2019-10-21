import React, { Component } from 'react';
import Layout from './Layout/Layout';

export default class App extends Component {

    constructor(){
        super();

        this.state = {
            title: 'React Starter',
            description: 'A basic template that consists of the essential elements that are required to start building a React application'
        };
    }

    render() {
        return (
            <Layout/>
        );
    }
}