import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartAction";
import {Table} from "reactstrap"

class CartDetail extends Component {
  render() {
    return (
      <div>
        <h1>Sepet</h1>
        <Table>

        </Table>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch){
    return{
      actions:{
        removeFromCart:bindActionCreators(cartActions.removeFromCart, dispatch)
      }
    }
  }
  
  function mapStateToProps(state) {
    return {
      cart: state.cartReducer,
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(CartDetail);