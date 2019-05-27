import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getToAccept } from '../../functions/admin';
import { getUserById } from '../../functions/user';

const Product = props => (
    <tr className="text-center">
        <td>{props.product.provider}</td>
        <td>{props.product.name}</td>
        <td>R$ {props.product.price}</td>
        <td>{props.product.category}</td>      
        <td>
            <Link to={"admin/"+props.product._id}>Aceitar</Link>
        </td>
    </tr>
)

export default class ToAccept extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            products: []
        }
    }

    componentDidMount() {
        getToAccept().then(res => {
            res.map(product => {
                getUserById(product.idProvider).then(provider => {
                    let newProduct = {
                        provider: provider.first_name,
                        name: product.name,
                        price: product.price,
                        category: product.category,
                    }
                    this.setState({
                        products: [...this.state.products, newProduct]
                    })
                })
            })
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
                
                <h2 className="text-center" style={{ marginTop: 30, marginBottom: 30}}>Itens a serem adicionados.</h2>
                <table className="table" style={{ marginTop: 20 }}>
                    <thead>
                        <tr className="text-center tableCustom">
                            <th style={{ border: "none" }}>Fornecedor</th>
                            <th style={{ border: "none" }}>Nome</th>
                            <th style={{ border: "none" }}>Preço</th>
                            <th style={{ border: "none" }}>Categoria</th>
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