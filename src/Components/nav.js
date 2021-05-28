import React from "react";
import { Link } from "react-router-dom";

import firebase from "../utils/firebase";

export default function nav() {


  const signout = () => {

    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (

    <div class="navigate">
     
      <ul>
        <li><Link to="/home"> LANDING PAGE</Link></li>
   

        <li>
          <button class="sign" onClick={signout}>SIGN OUT</button>
        </li>

      </ul>
    </div>
  )
}
