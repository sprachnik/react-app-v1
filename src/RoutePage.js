import React from "react";
import Page from "./components/Page";

const RoutePage = ({ children, ...props }) => {
  return <Page {...props}>{children}</Page>;
};

export default RoutePage;
