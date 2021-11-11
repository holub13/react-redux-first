import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
// import { bindActionCreators } from "redux";

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
const mapStateToProps = (state) => {
  return {
    counter: state
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
//   // const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
//   // return {
//   //   inc: inc,
//   //   dec: dec,
//   //   rnd: rnd
//   // };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, actions)(Counter);
