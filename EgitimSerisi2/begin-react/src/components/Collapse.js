import React from "react";

const Collapse = (props) => {
  return (
    <div>
      <p>
        <a
          class="btn btn-primary w-100"
          data-bs-toggle="collapse"
          href={"#".concat(props.href)}
          role="button"
          aria-expanded="false"
          aria-controls={props.href}
        >
          Link with href
        </a>
      </p>
      <div class="collapse show" id={props.href}>
        <div class="card card-body">
          {props.children}
        </div>
      </div>
    </div>
  );
};
export default Collapse;
