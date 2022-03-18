import React from "react";
import Home from "./pages/Home";
import Korzina from "./pages/Korzina";
import User from "./pages/User";
import Details from "./components/Details";
import {Routes, Route} from 'react-router-dom';




function App() {
  return (
    <div className="App">
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/page" element={<Korzina/>}/>
       <Route path="/user" element={<User/>}/>
       <Route path="/user/:id" element={<Details/>}/>
     </Routes>      
    </div>
  );
}

export default App;
