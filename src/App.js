import React, { useReducer } from "react";
import "./App.css";
import ParentComponent from "./components/useCallback/ParentComponent";
import Counter from "./components/useMemo/Counter";
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
import ClassTimer from "./components/useRef/ClassTimer";
import FocusInput from "./components/useRef/FocusInput";
import HookTimer from "./components/useRef/HookTimer";
import CounterOne from "./CustomHook/CounterOne";
import CounterTwo from "./CustomHook/CounterTwo";
import DocTitleOne from "./CustomHook/DocTitleOne";
import DocTitleTwo from "./CustomHook/DocTitleTwo";
import UserForm from "./CustomHook/UserForm";

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
        <ParentComponent />
        <Counter />
        <FocusInput />
        <ClassTimer />
        <HookTimer />
        <DocTitleOne />
        <DocTitleTwo />
        <CounterOne />
        <CounterTwo />
        <UserForm />
      </div>
    </CountContext.Provider>
  );
}

export default App;
