import React from "react";
import "./Skeleton.css";
const Skeleton = (props) => {
  return (
    <>
      {!props.isLoading ? (
        <div className="skeleton"></div>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};

export default Skeleton;
