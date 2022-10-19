import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
    return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Sepete eklenen ürünler - {this.props.cart.length}
      </DropdownToggle>
      <DropdownMenu right>
        {this.props.cart.map((cartItem) => (
          <DropdownItem key={cartItem.product.id}>
            {cartItem.product.ProductName}
            <Badge color="success">{cartItem.quantity}</Badge>
          </DropdownItem>
        ))}

        <DropdownItem divider />
        <DropdownItem>İptal Et</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    )
  }
  renderEmptyCart(){
    return(
        <NavItem>
            <NavLink>Sepete Eklenmiş Ürün Yok</NavLink>
        </NavItem>
    )
  }
  render() {
    return <div>
        {this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()}
    </div>;
  }
}
