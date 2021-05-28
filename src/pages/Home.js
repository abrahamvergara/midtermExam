import React, { useState, useEffect} from 'react'
import Nav from "../Components/nav";
import firebase from "firebase";
import { Link } from 'react-router-dom';

//import pic from "../images/Screenshot (393).png"

export default function Home() {
    const [pet, setPet] = useState(null);

    function selectDog(){

        setPet(selectedPet => selectedPet = 'Dog')
    }

    function selectCat(){

        setPet(selectedPet => selectedPet = 'Cat')
    }


    const [state, setState] = useState({
        user: null
    });

    useEffect(() => {
        var signedUser = firebase.auth().currentUser;

        if (signedUser ) {
        // User is signed in.
        setState({user : signedUser} )
        } else {    
        // No user is signed in.
        setState(null)
        }
        //console.log(signedUser ) 
        
    }, []);



    return (
        <div class = "div1">
            <Nav />
            
            <div>
            <h1>Welcome  {state.user ? state.user.email: "null"} </h1>
            </div>

            <h3> What is your pet? </h3>

            <span class="span1">{pet}</span>

              <button onClick={selectDog}>DOG </button>
              <button onClick={selectCat}> CAT</button><br/>
              
              <Link to ="/service">Next </Link>
        </div>
    )
}
