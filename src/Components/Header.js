import React from "react";

const Header = (props) => {
  return (
    <div className="container">
      <h1>{props.headline}</h1>
    </div>
  );
};

export default Header;