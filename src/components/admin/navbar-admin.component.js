import React, { Component } from 'react';
import '../../assets/css/navbar.css'
import { Link, withRouter } from 'react-router-dom';

class NavbarAdmin extends Component {
    constructor(props) {
        super(props);

        this.handleToggleNav = this.handleToggleNav.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

        this.state = {
            navCollapsed: true,

        }
    }

    handleToggleNav = (e) => {
        this.setState({ navCollapsed: !this.state.navCollapsed })
    }


    handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/');
    }

    render() {
        const { navCollapsed} = this.state

        return (
            <div>
                <div className="titleDiv">
                    <a href="/admin" className="titleHodierno">Hodierno</a>
                </div>
                
                <nav className="navbar navbarHodierno navbar-expand-lg">
                    <button 
                        className="navbar-toggler" 
                        type="button"
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        onClick={this.handleToggleNav}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'}>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <a>
                                <Link to={{
                                    pathname: '/admin/to_accept'
                                }}>
                                    Novos produtos
                                </Link>
                                
                            </a>
                            <a>
                                <Link to={{
                                    pathname: '/admin/orders'
                                }}>
                                    Pedidos
                                </Link>
                                
                            </a>
                            <a>
                                <Link to={{
                                    pathname: '/admin/mensagens'
                                }}>
                                    Mensagens
                                </Link>
                            </a>

                        </ul>
                    </div>  
             
                    <nav style={{ position: "relative" }}className="ml-auto">
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

export default withRouter(NavbarAdmin);