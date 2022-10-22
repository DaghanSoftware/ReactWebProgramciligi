import React, { Component } from 'react'
import { Table } from 'reactstrap'
export default class CartList extends Component {
  renderCart(){
    return(
      <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>CategoryID</th>
              <th>ProductName</th>
              <th>UnitPrice</th>
              <th>Unit In Stock</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(cartItem=>(
              <tr key={cartItem.product.id}>
                <td>{cartItem.product.id}</td>
                <td>{cartItem.product.categoryId}</td>
                <td>{cartItem.product.ProductName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.unitsInStock}</td>
                <td>{cartItem.product.quantityPerUnit}</td>
              </tr>
            ))}
          </tbody>
      </Table>
    )
  }
  render() {
    return (
      <div>
          {this.renderCart()}
      </div>
    )
  }
}
