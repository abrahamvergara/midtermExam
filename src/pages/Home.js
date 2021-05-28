import React, { useState } from 'react'
import Nav from "../Components/nav";

//import pic from "../images/Screenshot (393).png"

export default function Home() {
    const [pet, setPet] = useState(null);

    function selectDog(){

        setPet(selectedPet => selectedPet = 'Dog')
    }

    function selectCat(){

        setPet(selectedPet => selectedPet = 'Cat')
    }


    return (
        <div class = "div1">
            <Nav />
            <h1> What is your pet? </h1>

            <span class="span1">{pet}</span>

              <button onClick={selectDog}>DOG </button>
              <button onClick={selectCat}> CAT</button>
              
              <button> NEXT</button>
        </div>
    )
}
