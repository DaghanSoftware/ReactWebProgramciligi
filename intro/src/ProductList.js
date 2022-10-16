import React, { Component } from "react";
import { Table } from "reactstrap";
export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>ProductName</th>
              <th>categoryId</th>
              <th>quantityPerUnit</th>
              <th>unitPrice</th>
              <th>unitsInStock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
                <tr  key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.ProductName}</td>
                  <td>{product.categoryId}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitsInStock}</td>
                </tr>
            ))}

          </tbody>
        </Table>
        <h3>{this.props.currentCategory}</h3>
      </div>
    );
  }
}
