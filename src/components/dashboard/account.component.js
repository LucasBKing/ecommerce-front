import React, { Component } from 'react';
import { updateAccount } from '../../functions/user';
import '../../assets/css/account.css';
 
class Account extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeAdress = this.handleChangeAdress.bind(this);

        this.state = {
            user_id: props.location.state.user._id,
            first_name: props.location.state.user.first_name,
            last_name: props.location.state.user.last_name,
            email: props.location.state.user.email,
            user_type: props.location.state.user.user_type,
            adress: props.location.state.user.adress[0]

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeAdress = (e) => {
        this.setState({
            adress: {
                ...this.state.adress,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let newAccount = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            user_type: this.state.user_type,
            adress: this.state.adress
            
        }
        
        updateAccount(newAccount, this.state.user_id).then( res => {
            // Message success
            this.props.history.push('/dashboard');
        });
    }

    render() {
        return(
            <div className="container">
                <h2 className="text-center" style={{ marginTop: 30}}>Atualize sua conta.</h2>
                <form onSubmit={this.handleSubmit} style={{ padding: 20}}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Nome</label>
                            <input type="text"
                                name="first_name"
                                className="inputAccount"
                                value={this.state.first_name}
                                onChange={this.handleChange}
                                placeholder="Nome"
                                required 
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Sobrenome</label>
                            <input type="text"
                                name="last_name"
                                className="inputAccount"
                                value={this.state.last_name}
                                onChange={this.handleChange}
                                placeholder="Sobrenome"
                                required 
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Email</label>
                            <input type="email"
                                name="email"
                                className="inputAccount"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Email"
                                required 
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Rua</label>
                            <input 
                                type="text"
                                name="street"
                                className="inputAccount"
                                value={this.state.adress.street}
                                onChange={this.handleChangeAdress}
                                placeholder="Rua"
                                required
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Bairro</label>
                            <input
                                type="text"
                                name="neighborhood"
                                className="inputAccount"
                                value={this.state.adress.neighborhood}
                                onChange={this.handleChangeAdress}
                                placeholder="Bairro"
                                required
                            
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Cidade</label>
                            <input type="text"
                                name="city"
                                className="inputAccount"
                                value={this.state.adress.city}
                                onChange={this.handleChangeAdress}
                                placeholder="Cidade"
                                required 
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Estado</label>
                            <input
                                type="text"
                                name="state"
                                className="inputAccount"
                                value={this.state.adress.state}
                                onChange={this.handleChangeAdress}
                                placeholder="Estado"
                                required
                            
                            />
                        </div>
                        <div className="form-group col-md-2">
                            <label>Número</label>
                            <input type="number"
                                name="number"
                                className="inputAccount"
                                value={this.state.adress.number}
                                onChange={this.handleChangeAdress}
                                placeholder="Número"
                                required />
                        </div>
                    </div>
 
                    <div className="form-group">
                        <button type="submit" value="update user" className="btn btnUpdate">
                            Atualizar!
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Account;