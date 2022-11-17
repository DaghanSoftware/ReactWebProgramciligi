import React, { Component } from 'react'

class Collapse extends Component {
  render() {
    return (
      <div>
        <p>
          <a
            class="btn btn-primary w-100"
            data-bs-toggle="collapse"
            href={"#".concat(this.props.href)}
            role="button"
            aria-expanded="false"
            aria-controls={this.props.href}
          >
            Link with href
          </a>
        </p>
        <div class="collapse show" id={this.props.href}>
          <div class="card card-body">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
export default  Collapse;