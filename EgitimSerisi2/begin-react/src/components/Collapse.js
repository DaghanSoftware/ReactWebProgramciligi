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
  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  componentDidMount() {
    console.log("Component oluşturuldu");
  }

  componentDidUpdate() {
    console.log("Component Güncellendi");
  }
  render() {
    return (
      <div>
        <p>
          <button className="btn btn-primary w-100" onClick={this.showMore}>
            {/* {this.props.children.props.cardTitle} */}
            {React.Children.map(
              this.props.children,
              (children) => children.props.cardTitle
            )}
          </button>
        </p>
        {this.state.showContent ? (
          <div className="collapse show">
            <div className="card card-body">
              {/* {this.props.children} */}
              {React.Children.map(this.props.children,children=>children)}
              </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Collapse;
