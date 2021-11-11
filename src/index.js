import React from "react";
import ReactDOM from "react-dom";
import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from "./actions";
import Counter from "./components/counter";

const store = createStore(reducer);
const { dispatch, getState, subscribe } = store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// };

// actions = {
//   inc: inc,
//   dec: dec,
//   rnd: rnd
// };

// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);
// тоже самое ниже

// const { incDispatch, decDispatch, rndDispatch } = bindActionCreators(
//   {
//     incDispatch: inc,
//     decDispatch: dec,
//     rndDispatch: rnd
//   },
//   dispatch
// );

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

// document.getElementById("inc").addEventListener("click", inc);
// document.getElementById("dec").addEventListener("click", dec);
// document.getElementById("rnd").addEventListener("click", () => {
//   const value = Math.floor(Math.random() * 10);
//   rnd(value);
// });

const update = () => {
  ReactDOM.render(
    <Counter
      counter={getState()}
      inc={inc}
      dec={dec}
      rnd={() => {
        const value = Math.floor(Math.random() * 10);
        rnd(value);
      }}
    />,
    document.getElementById("root")
  );
};
update();
subscribe(update);
