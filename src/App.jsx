import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateActivity from './Components/Activity/CreateActivity';
import CardsDetails from "./Components/Details/Card"
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
// import Card from './Components/Details/Card';
import Details from './Components/Details/Details';
const App = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreateActivity/>}/>
        <Route path='/details' element={<Details/>}/>
      </Routes>
    </Router>
  );
}

export default App;
