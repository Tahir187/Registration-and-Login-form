import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import Home from './landingPage/Home';
import Navbar from './landingPage/Navbar';
import CreateActivity from './activity/CreateActivity';

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<Home />} /> */}
    //     {/* <Route path="/login" element={<Login />} /> */}
    //     {/* <Route path="/registration" element={<Registration />} /> */}
    //     <Route path='/createActivity' element={<CreateActivity/>}/>
    //   </Routes>
    // </Router>

    <CreateActivity />
  );
}

export default App;
