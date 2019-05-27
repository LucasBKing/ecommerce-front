import React, { Component } from 'react';
import { Route }  from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Navbar from './navbar.component';
import Account from './account.component'
import Item from './product.component';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../assets/img/slide1.jpg'
import slide2 from '../../assets/img/slide2.jpg'
import slide3 from '../../assets/img/slide3.jpg'
import ListProviders from './providers-list.component';
import ProviderItems from './provider-items.component';
import ShoppingCart from './shopping-cart.component';


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navCollapsed: true,
            user_id: null
        }
    }

    componentDidMount() {

        let token = localStorage.getItem('usertoken');
        if(token) {
            try {
                let decoded = jwt_decode(token);
                this.setState({
                    user_id: decoded.user._id
                })

            } catch(err) {
                console.log(err)
            }
        }

    }

    componentWillReceiveProps() {
        let token = localStorage.getItem('usertoken');
        if(token) {
            try {
                let decoded = jwt_decode(token);
                this.setState({
                    user_id: decoded.user._id
                })

            } catch(err) {
                console.log(err)
            }
        }

    }
    render() {
        return(
             <div>
                <Navbar />

                {/* <div className="container" style={{ marginTop: 20 }}>
                    <Carousel >
                        <div>
                            <img src={ slide1 } />
                            <p className="legend">Foto 1</p>
                        </div>
                        <div>
                            <img src={ slide2 }  />
                            <p className="legend">Foto 2</p>
                        </div>
                        <div>
                            <img src={ slide3 }  />
                            <p className="legend">Foto 3</p>
                        </div>
                    </Carousel>

                </div> */}
                
                <Route exact path={`/dashboard/providers`} component={ ListProviders } />
                <Route exact path={`/dashboard/providers/:name`} component={ ProviderItems } />
                <Route exact path={`/dashboard/providers/:name/:id`} component={ Item } />                
                <Route exact path={`/dashboard/account`} component={ Account } />
                <Route exact path={`/dashboard/shoppingcart`} component={ ShoppingCart } />

            </div>
        );
    }
}

export default Dashboard;