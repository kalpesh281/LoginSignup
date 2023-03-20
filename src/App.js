import React from "react";
import "./App.css"

import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import UserDetail from "./Components/UserDetail";




function App() {

  // const isLoggedIn=window.localStorage.getItem("loggedIn");
  
  return (
   <>
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              {/* <Route exact path="/" element={isLoggedIn==="true"?<UserDetail/>:<Login/> } /> */}
              <Route exact path="/" element={<Signup/>} /> 
              <Route exact path="/sign-in" element={<Login/>} />
              <Route exact path="/sign-up" element={<Signup/>} />
              <Route exact path="/userDetail" element={<UserDetail/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
   </>
  );
}

export default App;
