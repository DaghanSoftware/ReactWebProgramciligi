import React from "react";

const Collapse = (props) => {
  return (
    <div>
      <p>
        <a
          class="btn btn-primary"
          data-bs-toggle="collapse"
          href={"#".concat(props.href)}
          role="button"
          aria-expanded="false"
          aria-controls={props.href}
        >
          Link with href
        </a>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#".concat(props.href)}
          aria-expanded="false"
          aria-controls={props.href}
        >
          Button with data-bs-target
        </button>
      </p>
      <div class="collapse" id={props.href}>
        <div class="card card-body">
          {props.children}
        </div>
      </div>
    </div>
  );
};
export default Collapse;
