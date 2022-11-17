import React, { Component } from "react";

class Collapse extends Component {
  constructor() {
    //super kendimiz oluşturduğumuz constructor'ın React.Component içerisinde bulunan constructor içerisnde bulunan tüm özellikleri almamızı sağlıyor
    super();
    this.state = {
      showContent: false,
    };
    //this.showMore = this.showMore.bind(this)
  }
  showMore=()=>{
    this.setState({showContent:!this.state.showContent})
  }
  componentDidMount(){
    console.log('Component oluşturuldu')
  }
  componentDidUpdate(){
    console.log('Component Güncellendi')
  }
  render() {
    return (
      <div>
        <p>
          <button class="btn btn-primary w-100" onClick={this.showMore}>Link with href</button>
        </p>
        {this.state.showContent ? (
          <div class="collapse show">
            <div class="card card-body">{this.props.children}</div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Collapse;
