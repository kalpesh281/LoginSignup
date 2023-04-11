import React from "react";
import "./App.css"

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import UserDetail from "./Components/UserDetail";
import Protected from "./Components/Protected";








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

                <Route exact path="/" element={<Signup />} />

            
                <Route exact path="/sign-in" element={<Login />} />

                {/* <Route element={<Protected/>}>     */}
                <Route exact path="/userDetail" element={<Protected><UserDetail /></Protected>} />
                {/* </Route> */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
