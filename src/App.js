import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import  CustomCounter from './components/customhook';
import Error from './error404';
import CounterReducer from './components/useReducer';
import { Helmet } from 'react-helmet-async';



function Home() {
  return (
    <div>
    <Helmet>
        <title>Counter</title>
        <meta name = "description" content = "A counter app" />
        <link rel = 'canonical' href = "/" />
    </Helmet>
    <nav>
        <Link to="/" className="nav">
          Home
        </Link>
        <Link to="./components/customhook" className="nav">
          Custom Hook Counter
        </Link>
        <Link to="./components/useReducer" className="nav">
          Reducer Hook Counter
        </Link>
      </nav>

      <h1 className='name'>Remzy's Counter</h1>
      <p>Welcome to the home page</p>
      <h2>Altschool Exam Project</h2>
      <p>Another Challenge!</p>
    </div>
  );
}
 
function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path = '/components/customhook' element = {<CustomCounter />} />
        <Route path = '/components/useReducer' element = { <CounterReducer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

