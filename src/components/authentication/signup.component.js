import React, { Component } from 'react';
import { signUpAccount } from '../../functions/signup';

export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
        this.handleUserTypeChange = this.handleUserTypeChange.bind(this);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            user_type: '',
            state: '',
            city: '',
            street: '',
            neighborhood: '',
            number: ''

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
        
        let newAccount = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            user_type: this.state.user_type,
            adress: [{
                state: this.state.state,
                city: this.state.city,
                street: this.state.street,
                neighborhood: this.state.neighborhood,
                number: this.state.number
            }]
        }
 
        signUpAccount(newAccount).then( res => {
            if(res)
                //Message that works
                this.props.history.push('/');
            
        })        
    }
    

    render() {
        return(
            <div className="container-login">
                <div className="wrap-login p-l-55 p-r-55 p-t-80 p-b-30">

                    <form className="login-form validate-form" onSubmit={this.handleSubmit}>
                        <span className="login-form-title p-b-37">
                            Cadastro
                        </span>
                        <div className="wrap-input validate-input m-b-20">
                    
                                <input
                                    type="text"
                                    name="first_name"
                                    className="input"
                                    value={this.state.first_name}
                                    onChange={this.handleChange}
                                    placeholder="Nome"
                                    required
                                
                                />
                                
                                <input
                                    type="text"
                                    name="last_name"
                                    className="input"
                                    value={this.state.last_name}
                                    onChange={this.handleChange}
                                    placeholder="Sobrenome"
                                    required
                                
                                />
                            
                        </div>
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

                            <input
                                type="password"
                                name="password"
                                className="input"
                                value={this.state.password}
                                onChange={this.handleChange}
                                placeholder="Senha"
                                required
                            
                            />
                        </div>
                        <div className="wrap-input validate-input m-b-20">
                            <input
                                type="text"
                                name="state"
                                className="input"
                                value={this.state.state}
                                onChange={this.handleChange}
                                placeholder="Estado"
                                required
                            
                            />
                            <input
                                type="text"
                                name="city"
                                className="input"
                                value={this.state.city}
                                onChange={this.handleChange}
                                placeholder="Cidade"
                                required
                            />
                            <input
                                type="text"
                                name="street"
                                className="input"
                                value={this.state.street}
                                onChange={this.handleChange}
                                placeholder="Rua"
                                required
                            />
                        

                            <input
                                type="text"
                                name="neighborhood"
                                className="input"
                                value={this.state.neighborhood}
                                onChange={this.handleChange}
                                placeholder="Bairro"
                                required
                            
                            />
                            <input
                                type="number"
                                name="number"
                                className="input"
                                value={this.state.number}
                                onChange={this.handleChange}
                                placeholder="Numero"
                                required
                            />

                        </div>
                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    name="user_typeOptions" 
                                    id="clientType" 
                                    value="client" 
                                    checked={this.state.user_type==='client'}
                                    onChange={this.handleUserTypeChange}
                                />
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
                                <label className="form-check-label">Fornecedor</label>
                            </div>
                        
                        </div>
                        
                        <div className="container-login-form-btn">
                            <button type="submit" value="SignUp user" className="login-form-btn">
                                Sign Up
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        );
    }
}