import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import '../../assets/css/navbar.css'
import { Link, withRouter } from 'react-router-dom';

class NavbarProvider extends Component {
    constructor(props) {
        super(props);

        this.handleToggleNav = this.handleToggleNav.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

        this.state = {
            navCollapsed: true,
            provider_id: ''
        }
    }

    handleToggleNav = (e) => {
        this.setState({ navCollapsed: !this.state.navCollapsed })
    }

    componentDidMount() {
        let token = localStorage.usertoken;

        if(token) {
            try {
                let decoded = jwt_decode(token)
                
                this.setState({
                    provider_id: decoded.user._id
                })

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
        const { navCollapsed, provider_id } = this.state
        if(provider_id === null) {
            return null;
        }
        return (
            <div>
                <div className="titleDiv">
                    <a href="/provider" className="titleHodierno">Hodierno</a>
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
                                    pathname: '/provider/add',
                                    state: {
                                        provider_id: this.state.provider_id
                                    }
                                }}>
                                    Adicionar Items
                                </Link>
                                
                            </a>
                            <a>
                                <Link to={{
                                    pathname: '/provider/list',
                                    state: {
                                        provider_id: this.state.provider_id
                                    }
                                }}>
                                    Lista de acionados
                                </Link>
                            </a>
                            <a>
                                <Link to={{
                                    pathname: '/provider/mensagens',
                                    state: {
                                        provider_id: this.state.provider_id
                                    }
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

export default withRouter(NavbarProvider);