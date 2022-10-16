import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
export default class App extends Component {
  state={currentCategory:"ggg",products:[]}
  componentDidMount(){
    this.getProducts();
  }
  changeCategory = (category)=>{
    this.setState({currentCategory:category.CategoryName})
    this.getProducts(category.CategoryID);
  };
  getProducts = (categoryId)=>{
    let url ="http://localhost:3000/products";
    if(categoryId){
      url+= "?categoryId=" +categoryId;
    }
    fetch(url).then(Response=>Response.json()).then(data=>this.setState({products:data}));
  }

  render() {
    let productInfo = { title: "Product List", baskaBisey: "bisey" };
    let categoryInfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Row>
            <Navi></Navi>
          </Row>

          <Row>
            <Col xs="3">
              <CategoryList
               currentCategory={this.state.currentCategory}
               changeCategory={this.changeCategory}
               info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList 
              products={this.state.products}
              currentCategory={this.state.currentCategory} 
              info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
