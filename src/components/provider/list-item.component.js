import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/shoppingCart.css';
import { getItemByProviderId } from '../../functions/provider'

const Product = props => (
    <tr className="text-center">
        <td>
            <img alt="seila" src={props.product.image} height="40" witdh="40"/>
        </td>
        <td>{props.product.name}</td>
        <td>R$ {props.product.price}</td>
        <td>{props.product.category}</td>
        <td>{props.product.quantity}</td>       
        <td>
            <Link to={"provider/edit/"+props.product._id}>Edit</Link>
        </td>
    </tr>
)

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            provider_id: props.location.state.provider_id,
            products: []
        }
    }

    componentDidMount() {
        getItemByProviderId(this.state.provider_id).then(products => {
            this.setState({
                products: products
            })
        })
        .catch(err => {
            console.log(err)
        })
    }


    componentDidUpdate() {
        getItemByProviderId(this.state.provider_id).then(products => {
            this.setState({
                products: products
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    productList() {
        return this.state.products.map((currentProduct, i) => {
            return <Product product={currentProduct} key={i} />;
        });
    }

    render() {
        return(
            <div className="container">
                <h2 className="text-center" style={{ marginTop: 30, marginBottom: 30}}>Itens adicionados</h2>
                <table className="table" style={{ marginTop: 20 }}>
                    <thead>
                        <tr className="text-center tableCustom">
                            <th style={{ border: "none" }}>Image</th>
                            <th style={{ border: "none" }}>Nome</th>
                            <th style={{ border: "none" }}>Preço</th>
                            <th style={{ border: "none" }}>Categoria</th>
                            <th style={{ border: "none" }}>Quantia</th>
                            <th style={{ border: "none" }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.productList() }
                    </tbody>
                </table>
            </div>  
        );
    }
}