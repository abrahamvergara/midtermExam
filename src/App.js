import React, {useState, useEffect} from 'react'


import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

//routers
import PrivateRouter from "./routers/PrivateRouter";
import PublicRouter from "./routers/PublicRouter";

//firebase
import firebase from "./utils/firebase";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Service from "./pages/Service"

import Registration from "./pages/Registration";

import NotFound from "./pages/404";

//css
import "./Css/login.css";
import "./Css/nav.css";
import "./Css/home.css";



function App() {

  const [state, setState] = useState({
    isAuth: false,
    isLoading: true
  })


  useEffect(() => {
    firebase
    .auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        setState({isAuth: true, isLoading: false})
      } else {
        // No user is signed in.
        setState({isAuth: false, isLoading: false})
      }
    });
  }, [])
    
 
  if(state.isLoading)
  {
    return <p> Loading... </p>
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" exact/>
        </Route>
        
        <PublicRouter component={Login} isAuth={state.isAuth} restricted={true} path="/login" exact />
        <PublicRouter component={Registration} isAuth={state.isAuth} restricted={true} path="/registration" exact/>
        
        <PrivateRouter component={Home} isAuth={state.isAuth} path="/home" exact/>
        <PrivateRouter component={Service} isAuth={state.isAuth} path="/service" exact/>

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
