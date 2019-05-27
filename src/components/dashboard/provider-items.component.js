import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import jwt_decode from 'jwt-decode';
import '../../assets/css/items-provider.css';
import { getItemByProviderId } from '../../functions/provider';
import { addToShoppingCart } from '../../functions/cart';


export default class ProviderItems extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            user: null,
            provider_id: props.location.state.provider._id,
            products: []
        }

        this.handleAddShoppingCart = this.handleAddShoppingCart.bind(this);

    }


    componentDidMount() {
        
        getItemByProviderId(this.state.provider_id).then(res => {
            let token = localStorage.usertoken;

            if(token) {
                try {
                    let decoded = jwt_decode(token)
                    let { user } = decoded;
                    this.setState({
                        user: user,
                        products: res
                    });

                } catch(error) {
                    console.log(error);
                }    
            }
        })

    }

    handleAddShoppingCart = (product) => {

        let data = {
            name: product.name,
            price: product.price,
            quantity: 1 
        }
        
        addToShoppingCart(data, this.state.user._id).then(res => {
            this.props.history.push('/dashboard/shoppingcart')
        })
    }

    render() {
        return(
            <div className="container">
                <h2 className="text-center" style={{ marginTop: 30}}>{this.props.match.params.name}</h2>
                <div className="provider py-5 bg-ligh">
                    <div className="container" >
                        <div className="row">
                            {this.state.products && this.state.products.map((product, key) => {
                                return  <div className="col-md-4" 
                                            style={{ marginBottom: 20 }} 
                                            key={key}
                                        >
                                        <div className="card">
                                            <img className="card-img" style={{ maxHeight: 300, maxWidth: 450, borderRadius: 0}} src={product.image} alt="product"/>

                                            <div className="card-body">
                                                <Link to={{
                                                    pathname: `${this.props.location.pathname}/${product._id}`
                                                }}><h4 className="card-title">{product.name}</h4></Link>

                                                
                                                <h6 className="card-subtitle mb-2 text-muted">Categoria: {product.category}</h6>
                                            
                                            <div className="buy align-items-center">
                                                <div className="price text-success">
                                                    <h5 style={{ fontWeight: 'bold' }} className="mt-4">R${product.price}</h5>
                                                </div>
                                                <button className="btn btn-addCart btn-danger mt-3" onClick={() => this.handleAddShoppingCart(product)}>
                                                    <FontAwesomeIcon
                                                        icon={faShoppingCart}
                                                        color="white"
                                                        style={{ marginRight: 5}}
                                                    />
                                                    Add to Cart
                                                </button>
                                            </div>
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