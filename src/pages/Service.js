import React from 'react'
import Nav from "../Components/nav"
export default function Service() {

    return (

        <div>
            <Nav/>
            <div>
                <h1>Products</h1>
                <div>
                    <label htmlFor="text">Shampoo</label>
                    <input type="checkbox"></input><br/>
                    <label htmlFor="text">Toothpaste</label>
                    <input type="checkbox"></input><br/>
                    <label htmlFor="text">Nail Cutter</label>
                    <input type="checkbox"></input><br/>
                    <label htmlFor="text">Dog/Cat Food</label>
                    <input type="checkbox"></input><br/>
                    <label htmlFor="text">DentaStix</label>
                    <input type="checkbox"></input><br/>
                </div>
            </div>

            <div>
                <h1>Services </h1>
                <div>  
                    <label htmlFor="text">Groom</label>
                    <input type="checkbox"></input><br/>
                    <label htmlFor="text">Nail Cutting</label>
                    <input type="checkbox"></input><br/>
                    <label htmlFor="text">Vaccine 3 in 1</label>
                    <input type="checkbox"></input><br/>
                    <label htmlFor="text">Deworm</label>
                    <input type="checkbox"></input><br/>
                </div>
            </div><br/>

            <button>Confirm</button>
        </div>
    )
}
