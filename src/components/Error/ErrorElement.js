import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);

  return <div>Error Element COmponent</div>;
};

export default ErrorElement;
