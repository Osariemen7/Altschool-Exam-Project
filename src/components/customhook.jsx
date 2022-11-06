import { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'

const useGetNumber = () => {
  let [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  const valueReset = () => {
    setCount(0);
  };
  const changeNum = (event) => {
    setCount(event.target.value);
  };
  return { count, changeNum, handleIncrement, handleDecrement, valueReset };
};
const CustomCounter = () => {
  const { count, changeNum, handleIncrement, handleDecrement, valueReset } =
    useGetNumber();
  return (
    <header className="Counter">
    <Helmet>
        <title>counter with customhook</title>
        <meta name = "description" content = "A counter app coded with custom hook" />
        <link rel = 'canonical' href = "/components/customhook" />
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
      <h1>Altschool Exam Project</h1>
      <h2 className="num">{count}</h2>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={valueReset}>Reset</button>
      <button onClick={handleDecrement}>Decrease</button>
      <br />
      <br />
      <label>Set Value: </label>
      <input onChange={changeNum} type="number" value={count} />
    </header>
  );
};
export default CustomCounter;
