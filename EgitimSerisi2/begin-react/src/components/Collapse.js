import React, { Component } from "react";

class Collapse extends Component {
  constructor() {
    //super kendimiz oluşturduğumuz constructor'ın React.Component içerisinde bulunan constructor içerisnde bulunan tüm özellikleri almamızı sağlıyor
    super();
    this.state = {
      showContent: false,
    };
  }
  render() {
    return (
      <div>
        <p>
          <a class="btn btn-primary w-100">Link with href</a>
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
