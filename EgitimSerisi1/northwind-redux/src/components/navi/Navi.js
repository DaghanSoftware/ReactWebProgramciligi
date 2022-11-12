import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import {Link} from "react-router-dom";
import CartSummary from "../cart/CartSummary";

class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render(){
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand><Link to="/product">DaghanDigital</Link></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/DaghanSoftware">
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/saveproduct">Ürün Ekle</Link>
              </NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText><Nav className="me-auto" navbar><CartSummary></CartSummary></Nav></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
}

export default Navi;