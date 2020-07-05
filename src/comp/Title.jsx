import React from "react";

function Title(props) {

  const { text } = props;

  return (
    <h1>{text || ""}</h1>
  )
}


export default Title
