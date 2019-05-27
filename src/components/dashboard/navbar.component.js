import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import '../../assets/css/navbar.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: []
        }

        this.handleLogout = this.handleLogout.bind(this);
        
    }

    componentDidMount() {
        let token = localStorage.usertoken;

        if(token) {
            try {
                let decoded = jwt_decode(token)
                let { user } = decoded;
                this.setState({
                    user: user
                });

            } catch(error) {
                console.log(error);
            }
            
        } else {
            this.props.history.push('/');
        }
    }

    handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="titleDiv">
                    <a href="/dashboard" className="titleHodierno">Hodierno</a>
                </div>
                
                <nav className="navbar navbarHodierno navbar-expand-lg">  
                    <a> 
                        <Link to={{
                            pathname: `/dashboard/account`,
                            state: {
                                user: this.state.user
                            }
                        }}>
                            Conta
                        </Link>
                    </a>
                    <a>
                        <Link to={{
                            pathname: `/dashboard/providers`,
                            state: {
                                user: this.state.user
                            }
                        }}>
                            Fornecedores
                        </Link>
                    </a>
                        
             
                    <nav className="ml-auto">
                        <Link to={{
                            pathname: `/dashboard/shoppingcart`,
                            state: {
                                user: this.state.user
                            }
                        }}>
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                                color="grey"
                                size="2x"
                                style={{ marginRight: 10, marginTop: 7, cursor: "pointer" }}
                            />
                        </Link>
                        <button
                            onClick={this.handleLogout}
                            className="btn" 
                            type="submit"
                        >
                            Logout
                        </button>
                    </nav>
                </nav>
            </div>
            
        );
    }
}

export default withRouter(Navbar);