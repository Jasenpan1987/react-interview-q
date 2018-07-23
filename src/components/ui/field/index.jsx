import React from "react";
// import PropTypes from 'prop-types'

const Field = ({ type = "text", name, value, onChange, label }) => (
  <div className="form-group">
    <label htmlFor={name}>{label ? label : name}</label>
    <input
      type={type}
      id={name}
      name={name}
      data-target={name}
      className="form-control"
      value={value}
      onChange={onChange}
    />
  </div>
);

export { Field };
