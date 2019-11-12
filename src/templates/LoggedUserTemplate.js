import React from "react";
import PropTypes from "prop-types";

const LoggedUserTemplate = ({ children }) => {
  return <div>{children}</div>;
};

LoggedUserTemplate.propTypes = {
  children: PropTypes.node.isRequired
};

export default LoggedUserTemplate;
