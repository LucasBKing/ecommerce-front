import React, { Component } from 'react';
import { Route }  from 'react-router-dom';
import NavbarAdmin from './navbar-admin.component';
import ToAccept from './to-accept.component';
import Orders from './orders.component';



class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: null
        }
    }

    componentDidMount() {
    }

    render() {
        return(
             <div>
                <NavbarAdmin />
                {/* carousel */}
                <Route exact path={`/admin/to_accept`} component={ ToAccept } />
                <Route exact path={`/admin/orders`} component={ Orders } />
                {/* <Route exact path={`/admin/mensagens`} component={ Messagens } /> */}

            </div>
        );
    }
}

export default Admin;