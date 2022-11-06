import { useReducer } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom'

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "change":
      const newValue = { count: action.payload };
      return newValue;
  }

  throw Error("Unknown action.");
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  const reset = () => {
    dispatch({ type: "reset" });
  };
  const change = (event) => {
    dispatch({ type: "change", payload: event.target.value });
  };
  return (
    <div>
    <Helmet>
        <title>counter with useReducer</title>
        <meta name = "description" content = "A counter app coded with useReducer hook" />
        <link rel = 'canonical' href = "/useReducer" />
    </Helmet>
      <nav>
        <Link to="/" className="nav">
          Home
        </Link>
        <Link to="/components/customhook" className="nav">
          Custom Hook Counter
        </Link>
        <Link to="/components/useReducer" className="nav">
          Reducer Hook Counter
        </Link>
      </nav>
      <h1>useReducer Counter</h1>
      <h2>{state.count}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrease</button>
      <br />
      <br />
      <label>Set Value: </label>
      <input onChange={change} type="number" value={state.count} />
    </div>
  );
};
export default CounterReducer;
