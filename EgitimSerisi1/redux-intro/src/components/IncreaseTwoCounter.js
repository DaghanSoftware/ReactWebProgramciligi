import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { inreaseByTwoCounter } from '../redux/actions/counterActions';
class IncreaseTwoCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={e=>{
          this.props.dispatch(inreaseByTwoCounter());
        }}>2 Arttır</button>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch){
  return {actions:bindActionCreators(inreaseByTwoCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseTwoCounter);