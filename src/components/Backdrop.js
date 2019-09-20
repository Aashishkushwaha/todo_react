import React from "react";

const Backdrop = props => {
  return (
    <div
      onClick={props.sideDrawerHandler}
      className="sidebar__backdrop--container"
    />
  );
};

export default Backdrop;
