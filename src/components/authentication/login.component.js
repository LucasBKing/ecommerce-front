import React, { Component } from 'react';
import { loginAccount } from '../../functions/login';
import backgroundLogin from '../../assets/img/backgroundLogin.jpg';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleUserTypeChange = this.handleUserTypeChange.bind(this);

        this.state = {
            email: '',
            password: '',
            user_type: ''
        }
    }

    handleUserTypeChange = (e) => {
        this.setState({
            user_type: e.target.value
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }) 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        let account = {
            email: this.state.email,
            password: this.state.password,
            user_type: this.state.user_type
        }
 
        loginAccount(account).then( res => {
            if(this.state.user_type === 'client')
                this.props.history.push('/dashboard');
            else
                if(this.state.user_type === 'provider')
                this.props.history.push('/provider');
            
        })        
    }
    
    handleSignUp = (e) => {
        this.props.history.push('/signup');
    }

    render() {
        return(
            <div className="container-login">
                <div className="wrap-login p-l-55 p-r-55 p-t-80 p-b-30">
                    <form className="login-form validate-form" onSubmit={this.handleSubmit}>
                        <span className="login-form-title p-b-37">
                            HODIERNO
                        </span>
                        <span className="login-form-title2 p-b-37">
                            MOVEIS PLANEJADOS
                        </span>
                        <div className="wrap-input validate-input m-b-20">
                            <input
                                type="email"
                                name="email"
                                className="input"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Email"
                                required
                            
                            />
                            <span className="focus-input"></span>
                        </div>
                        <div className="wrap-input validate-input m-b-25">
                            <input
                                type="password"
                                name="password"
                                className="input"
                                value={this.state.password}
                                onChange={this.handleChange}
                                placeholder="password"
                                required
                            
                            />
                            <span className="focus-input"></span>
                        </div>
                        <div className="form-group">

                            <div className="form-check form-check-inline">
                                <input 
      
                                    type="checkbox" 
                                    name="user_typeOptions" 
                                    id="clientType" 
                                    value="client" 
                                    checked={this.state.user_type==='client'}
                                    onChange={this.handleUserTypeChange}
                                    
                                />
                                <span className="checkmark"></span>
                                <label className="form-check-label">Cliente</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    name="user_typeOptions" 
                                    id="providerType" 
                                    value="provider" 
                                    checked={this.state.user_type==='provider'}
                                    onChange={this.handleUserTypeChange}
                                   
                                />
                                <span className="checkmark"></span>
                                <label className="form-check-label">Fornecedor</label>
                            </div>
                        
                        </div>
                        
                        <div className="container-login-form-btn">
                            <button type="submit" value="Login user" className="login-form-btn">
                                Entrar
                            </button>
                        </div>
                        
                    </form>
                    <div className="container-login-form-btn">
                        <button onClick={this.handleSignUp} value="SignUp user" className="signup-form-btn">
                            Cadastrar-se
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}