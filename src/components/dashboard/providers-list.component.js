import React, { Component } from 'react';
import { getProviders } from '../../functions/user';
import { Link } from 'react-router-dom';
import '../../assets/css/providers-navbar.css';
import defaultW from '../../assets/img/defaultW.jpg';

export default class ListProviders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list_providers: null
        }
    }

    componentDidMount() {
        getProviders().then(res => {
            this.setState({
                list_providers: res
            })
        })
    }

    render() {
        return (
            <div className="tabsProviders">
                <ul className="nav justify-content-center">
                    {this.state.list_providers && this.state.list_providers.map((provider, key) => {
                        return <a key={key}>
                                    <Link to={{
                                        pathname: `/dashboard/providers/${provider.first_name}`,
                                        state: {
                                            provider: provider
                                        }
                                    }}>
                                        {provider.first_name}
                                    </Link>
                                </a>
                    })}
                    
                </ul>
                <div className="provider py-5 bg-ligh">
                        <div className="container">
                            <div className="row">
                                {this.state.list_providers && this.state.list_providers.map((provider, key) => {
                                    return  <div className="col-md-4" 
                                                style={{ marginBottom: 20}} 
                                                key={key}
                                            >
                                                <div className="card text-center imagesProviders mb-4">
                                                    <img 
                                                        src={defaultW} 
                                                        className="card-img-top" 
                                                        alt="seila" width="325" 
                                                        height="300"
                                                    />
                                                    <div style={{ marginTop: 80}} className="linksProviders card-img-overlay">

                                                        <p className="card-text">
                                                            <Link to={{
                                                                pathname: `/dashboard/providers/${provider.first_name}`,
                                                                state: {
                                                                    provider: provider
                                                                }
                                                            }}>
                                                            
                                                                    {provider.first_name}
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}