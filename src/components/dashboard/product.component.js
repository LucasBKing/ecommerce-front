import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import '../../assets/css/items-provider.css';
import { getItemById } from '../../functions/product';
import { addToShoppingCart } from '../../functions/cart';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
export default class Item extends Component {
    constructor(props) {
        super(props);

        this.handleAddShoppingCart = this.handleAddShoppingCart.bind(this);

        this.state = {
            name: '',
            price: '',
            image: '',
            description:'',
            category:'',
            quantity:'',
            onSale: false
        }
    }

    componentDidMount() {
        let token = localStorage.getItem('usertoken');
        if(token) {
            try {
                let decoded = jwt_decode(token);
            
                getItemById(this.props.match.params.id).then(res => {
                    if(res.quantity > 0) {
                        this.setState({
                            user_id: decoded.user._id,
                            name: res.name,
                            price: res.price,
                            image: res.image,
                            description: res.description,
                            category: res.category
                        })
                    }
                    
                })

            } catch(err) {
                console.log(err)
            }
        }
        
    }

    handleAddShoppingCart = (e) => {

        let data = {
            name: this.state.name,
            price: this.state.price,
            quantity: 1 
        }
        
        addToShoppingCart(data, this.state.user_id).then(res => {
            console.log(res);
        })
    }
    render() {

        return( 
                <div className="container" style={{ padding: 20 }}>
                    <div className="row" >
                        <div className="card col-mb-3" style={{ marginTop: 30, border: 'none'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img style={{ borderRadius: 0 }}src={this.state.image} className="card-img" alt={this.state.name}/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h3 style={{ fontWeight: 'bold' }}className="card-title">{this.state.name}</h3>
                                        <p style={{ minWidth: 800}} className="card-text">Descrição: {this.state.description}</p>
                                        <p style={{ minWidth: 800}} className="card-text">Categoria: {this.state.category}</p>
                                        <div className="buy d-flex justify-content-between align-items-center">
                                            <div className="price text-success">
                                                <h5 style={{ fontWeight: 'bold' }} className="mt-4">R${this.state.price}</h5>
                                            </div>
                                            <button className="btn btn-addCart btn-danger mt-3" onClick={() => this.handleAddShoppingCart}>
                                                <FontAwesomeIcon
                                                    icon={faShoppingCart}
                                                    color="white"
                                                />
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
        );
    }
}