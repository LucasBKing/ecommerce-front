import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import { Switch, Route, Link } from 'react-router-dom';
import NavbarProvider from './navbar-provider.component';
import AddItem from './add-item.component';
import ListItem from './list-item.component';

export default class Provider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            provider_id: ''
        }
    }


    componentDidMount() {
        let token = localStorage.getItem('usertoken');
        if(token) {
            try {
                let decoded = jwt_decode(token);
                this.setState({
                    provider_id: decoded.user._id
                })
            } catch(err) {
                console.log(err)
            }
        }
    }


    render() {
        
        return(
            <div className="container">
                <NavbarProvider />
                <Switch>
                    <Route path='/provider/add' component={ AddItem } />
                    <Route path='/provider/list' component={ ListItem } />
                </Switch>
            </div>
        );
    }
}