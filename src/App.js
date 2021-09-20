import React, { useReducer } from "react";
import "./App.css";
// import ClassCounter from "./components/ClassCounter";
// import ClassCounterTwo from "./components/ClassCounterTwo";
// import HookCounter from "./components/HookCounter";
// import HookCounterFour from "./components/HookCounterFour";
// import HookCounterThree from "./components/HookCounterThree";
// import HookCounterTwo from "./components/HookCounterTwo";
// import ClassComponentOne from "./components/useEffect/ClassComponentOne";
// import ClassMouse from "./components/useEffect/ClassMouse";
// import DataFetching from "./components/useEffect/DataFetching";
// import HookCounterOne from "./components/useEffect/HookCounterOne";
// import HookMouse from "./components/useEffect/HookMouse";
// import IntervalHookCounter from "./components/useEffect/IntervalHookCounter";
// import IntervalClassCounter from "./components/useEffect/IntervalClassCounter";
// import MouseContainer from "./components/useEffect/MouseContainer";
// import CounterOne from "./components/useReducer/CounterOne";
// import CounterThree from "./components/useReducer/CounterThree";
// import CounterTwo from "./components/useReducer/CounterTwo";
import ComponentA from "./components/useReducer/ComponentA";
import ComponentB from "./components/useReducer/ComponentB";
import ComponentC from "./components/useReducer/ComponentC";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        count - {count}
        {/* <ClassCounter />
        <HookCounter />
        <HookCounterTwo />
        <ClassCounterTwo />
        <HookCounterThree />
        <HookCounterFour />
        <ClassComponentOne />
        <HookCounterOne />
        <ClassMouse />
        <HookMouse />
        <MouseContainer />
        <IntervalClassCounter/>
        <IntervalHookCounter />
        <DataFetching />
        <CounterOne />
        <CounterTwo />
        <CounterThree /> */}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
