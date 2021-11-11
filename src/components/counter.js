import React from "react";

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron m-2">
      <h1>{counter}</h1>
      <button className="btn btn-danger" onClick={dec}>
        DEC
      </button>
      <button className="btn btn-success m-1" onClick={inc}>
        INC
      </button>
      <button className="btn btn-warning" onClick={rnd}>
        RND
      </button>
    </div>
  );
};

export default Counter;
