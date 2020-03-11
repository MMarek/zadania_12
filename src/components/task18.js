import React, {Component} from "react";
import products from './data/products';

class ProductsList extends Component {
    render() {
        return (
            products.map((p) => (
                <div key={p.code}>
                    <h2 style={{color: "green"}}>{p.name}</h2>
                    <h3 style={{color: "purple"}}>Price: {p.price} €</h3>
                    <button>Do koszyka</button>
                </div>
            ))
        )
    }
}

class Task18 extends Component {
    render() {
        return <ProductsList/>
    }
}

export default Task18;