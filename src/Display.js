import React from "react";
import data from "./data.js";
import {useState} from "react";

const Display = () => {
    const [personIndex, setPersonIndex] = useState(0)

    const nextPerson = () => {
        if(personIndex > 23){
            setPersonIndex(0)
        } else {
            setPersonIndex((prevState) => prevState + 1)
        }
    }

    return (
        <div class="display">
            <h1>{data[personIndex].name.first + ' ' + data[personIndex].name.last}</h1>
            <h2><span id="bold">From:</span> {data[personIndex].city + ', ' + data[personIndex].country}</h2>
            <h2><span id="bold">Job Title:</span> {data[personIndex].title}</h2>
            <h2><span id="bold">Employer:</span> {data[personIndex].employer}</h2>
            <h2><span id="bold">Favorite persons:</span></h2>
            <ol>
                {
                    data[personIndex].favoriteMovies.map((el, index) => <li>{index + 1 +'. ' + el}</li>)
                }
            </ol>
            <button id="next-button" onClick={nextPerson}>Next→</button>
        </div>
    )
}

export default Display