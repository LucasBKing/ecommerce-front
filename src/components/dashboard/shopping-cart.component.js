import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import { addOrder } from '../../functions/order'
import '../../assets/css/shoppingCart.css'
import { getShoppingCartProducts, cleanShoppingCart, removeItemShoppingCart } from '../../functions/cart';

export default class ShoppingCart extends Component {
    constructor(props){
        super(props);

        this.handleBuy = this.handleBuy.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        this.state = {
            total: 0,
            products: []
        }
    }

    componentDidMount() {
        let token = localStorage.getItem('usertoken');
        if(token) {
            try {
                let decoded = jwt_decode(token);
                this.setState({
                    idUser: decoded.user._id
                })

                getShoppingCartProducts(decoded.user._id).then(res => {
                    res.products.map(product => {
                        // remove it
                        if(product.name) {
                            let newProduct = {
                                id: product._id,
                                name: product.name,
                                price: product.price,
                                quantity: product.quantity
                            }
                            this.setState({
                                products: [...this.state.products, newProduct],
                                total: parseFloat(this.state.total) + parseFloat(product.price)
                            })
                        }
                    })
                })   
                
            } catch(err) {
                console.log(err)
            }
        }
             
    }

    handleRemove = (product) => {

        removeItemShoppingCart(this.state.idUser, product.id).then(res => {
            //message success
            window.location.reload();
        })
    }

    handleBuy = (e) => {
        addOrder(this.state).then(res => {
            cleanShoppingCart(this.state.idUser).then(res => {
            
            })
        })
    }

    render() {
        return( 
            <div className="container">
            <h2 className="text-center" style={{ marginTop: 30}}>Seu carrinho.</h2> 
                <table className="table" style={{ marginTop: 20 }}>
                    <thead>
                        <tr className="text-center tableCustom">
                            <th style={{ border: "none" }}>Nome</th>
                            <th style={{ border: "none" }}>Preço</th>
                            <th style={{ border: "none" }}> Quantia</th>
                            <th style={{ border: "none" }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.products.map((product, key) => {
                       return <tr className="text-center" key={key}>

                                <td>{product.name}</td>
                                <td>R$ {product.price}</td>
                                <td>
                                    <select className="custom-select" id="quantity">
                                        <option defaultValue value="{props.product.quantity}">{product.quantity}</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </td>       
                                <td>
                                <button type="button" className="btn btnRemove" onClick={() => this.handleRemove(product)}>
                                    Remover
                                </button>
                                </td>
                            </tr>
                    })}
                        
                    </tbody>
                </table>
                
                <div className="text-center" style={{ marginTop: 30,right: 50, position: 'absolute' }}>

                        <h3 style={{ fontWeight: 'bold' }}>Total: R${this.state.total}</h3>

                    <button type="button" className="btn btnBuy" onClick={this.handleBuy}>
                        Finalizar pedido
                    </button>
                </div>
                

                
            </div>
        );
    }
}