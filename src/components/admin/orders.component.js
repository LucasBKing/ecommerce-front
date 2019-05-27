import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getOrders } from '../../functions/order';
import { getUserById } from '../../functions/user';


export default class Orders extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            orders: []
        }
    }

    componentDidMount() {
        getOrders().then(res => {
            res.map(order => {
                getUserById(order.idUser).then(atts => {
                    
                    let newOrder = {
                        idOrder: order._id,
                        first_name: atts.first_name,
                        last_name: atts.last_name,
                        total: order.total,
                        products: order.products,
                    }
                    this.setState({
                        orders: [...this.state.orders, newOrder]
                    })
                })
            })
        })

    }

    render() {
        return(
            <div className="container">
                <h2 className="text-center" style={{ marginTop: 30, marginBottom: 30}}>Novos pedidos.</h2>
                <table className="table" style={{ marginTop: 20 }}>
                    <thead>
                        <tr className="text-center tableCustom">
                            <th style={{ border: "none" }}>Usuário</th>
                            <th style={{ border: "none" }}>Total</th>
                            <th style={{ border: "none" }}></th>
                            <th style={{ border: "none" }}></th>

                        </tr>
                    </thead>
                    <tbody>
                    {this.state.orders.map((order, key) => {
                        return <tr className="text-center">
                                    <td>{order.first_name} {order.last_name}</td>
                                    <td>R$ {order.total}</td>
                                    <td>
                                        <Link to={"admin/order/"+order._id}>Aceitar</Link>
                                    </td>
                                    <td>
                                        <Link to={"admin/order/"+order._id}>Visualizar pedido</Link>
                                    </td>
                                </tr>
                    })}
                    </tbody>
                </table>
            </div>  
        );
    }
}