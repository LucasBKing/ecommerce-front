import React, { Component } from 'react';
import '../../assets/css/account.css'
import { addItem } from '../../functions/provider';


export default class AddItem extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleChangeFile = this.handleChangeFile.bind(this);
        this.handleOnClickFile = this.handleOnClickFile.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);

        this.state = {
            provider_id: props.location.state.provider_id,    
            name: '',
            price: '',
            image: '',
            description:'',
            category:'',
            quantity:'',
            onSale: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }) 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newProduct = {
            name: this.state.name,
            price: this.state.price,
            image: this.state.image,
            description:this.state.description,
            category:this.state.category,
            quantity:this.state.quantity,
            onSale: this.state.onSale,
            idProvider: this.state.provider_id
        }
        
        addItem(newProduct).then(res => {
            // Message success
            this.setState({
                name: '',
                price: '',
                image: '',
                description:'',
                category:'',
                quantity:'',
                onSale: false
            })
        })
    }

    handleCategoryChange = (e) => {
        this.setState({
            category: e.target.value
        })
    }

    handleChangeFile = (e) => {

        let fileReader = new FileReader();
        let file = e.target.files[0];
        fileReader.readAsDataURL(file)

        fileReader.onload = () => {
            this.setState({
                image: fileReader.result
            });
        }
    }

    handleOnClickFile = (e) => {
        e.target.value = null
    }

    render() {

        return(
            <div className="container">
                <h2 className="text-center" style={{ marginTop: 30}}>Adicione um novo item.</h2>
                    <form onSubmit={this.handleSubmit}  style={{ padding: 20}}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Nome</label>
                                <input 
                                    type="text"
                                    name="name"
                                    className="inputAccount"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    placeholder="Nome do produto"
                                    required
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Categoria:</label>
                                <select style={{ backgroundColor: "white" }} className="inputAccount" id="category" onChange={this.handleCategoryChange}>
                                    <option defaultValue>Escolha...</option>
                                    <option value="Cozinha">Cozinha</option>
                                    <option value="Sala">Sala</option>
                                    <option value="Escritório">Escritório</option>
                                    <option value="Cama, mesa e banho">Cama, mesa e banho</option>
                                </select>
                            </div>
   
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Preço:</label>
                                <input
                                    type="number"
                                    name="price"
                                    className="inputAccount"
                                    value={this.state.price}
                                    onChange={this.handleChange}
                                    placeholder="R$"
                                    required
                                
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Quantidade:</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    className="inputAccount"
                                    value={this.state.quantity}
                                    onChange={this.handleChange}
                                    placeholder="XX"
                                    required
                                
                                />
                            </div>

                        </div>
                        <div className="form-group">
                            <label>Descrição:</label>
                            <textarea
                                type="text"
                                name="description"
                                className="inputAccount"
                                value={this.state.description}
                                onChange={this.handleChange}
                                placeholder="Descrição do produto"
                                required
                            
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input id="upload" ref="upload" type="file" accept="image/*"
                                onChange={this.handleChangeFile}
                                onClick={this.handleOnClickFile}
                            >
                            </input>
                        </div>
                        
                        <div className="form-group">
                            <button type="submit" value="SignUp user" className="btn btnBuy">
                                Enviar
                            </button>
                        </div>
                        
                    </form>
            </div>
        );
    }
}