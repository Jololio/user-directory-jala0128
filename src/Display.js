import React from "react";
import data from "./data.js";
import {useState} from "react";

import './userInfo.css'

const Display = () => {
    const [people, setPeople] = useState(data)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [cityName, setCityName] = useState("")
    const [countryName, setCountryName] = useState("")
    const [employer, setEmployer] = useState("")
    const [title, setTitle] = useState("")
    const [firstMovie, setFirstMovie] = useState("")
    const [secondMovie, setSecondMovie] = useState("")
    const [thirdMovie, setThirdMovie] = useState("")
    const [personIndex, setPersonIndex] = useState(0)
    const [isEditing, toggleEditing] = useState(false)
    const [showForm, setShowForm] = useState(false)


    const previousPerson = () => {
        if(personIndex < 1){
            setPersonIndex(people.length - 1)
        } else {
            setPersonIndex((prevState) => prevState - 1)
        }
    }

    const nextPerson = () => {
        if(personIndex >= people.length - 1){
            setPersonIndex(0)
        } else {
            setPersonIndex((prevState) => prevState + 1)
        }
    }
    
    const createPerson = () => {
        let personObject = {
            id: people.length + 1,
            name: { first: firstName, last: lastName },
            city: cityName,
            country: countryName,
            employer: employer,
            title: title,
            favoriteMovies: [
                firstMovie,
                secondMovie,
                thirdMovie
            ]
        }
        if(isEditing === true){
            people[personIndex] = personObject
            toggleEditing(false)
        } else {
            people.push(personObject)
        }
        setPeople(people)
        setFirstName("")
        setLastName("")
        setCityName("")
        setCountryName("")
        setEmployer("")
        setTitle("")
        setFirstMovie("")
        setSecondMovie("")
        setThirdMovie("")
        
        setShowForm(false)
    }

    const editPerson = () => {
        setShowForm(true)
        const person = people[personIndex]
        setFirstName(person.name.first)
        setLastName(person.name.last)
        setCityName(person.city)
        setCountryName(person.country)
        setEmployer(person.employer)
        setTitle(person.title)
        setFirstMovie(person.favoriteMovies[0])
        setSecondMovie(person.favoriteMovies[1])
        setThirdMovie(person.favoriteMovies[2])
        toggleEditing(true)
    }

    const deletePerson = () => {
        setPeople(people.filter((_, i) => i !== personIndex))
        if(personIndex !== 0) setPersonIndex(personIndex - 1)
    }
    
    return (
        <div className="display_wrapper">
            {showForm && <div id="secret-form">
                <input id="first-name-input" placeholder="Enter First Name" type="text" onChange={e=>setFirstName(e.target.value)} value={firstName}/>
                <input id="last-name-input" placeholder="Enter Last Name" type="text" onChange={e=>setLastName(e.target.value)} value={lastName}/>
                <input id="city-input" placeholder="Enter City" type="text" onChange={e=>setCityName(e.target.value)} value={cityName}/>
                <input id="country-input" placeholder="Enter Country" type="text" onChange={e=>setCountryName(e.target.value)} value={countryName}/>
                <input id="employer-input" placeholder="Enter Employer" type="text" onChange={e=>setEmployer(e.target.value)} value={employer}/>
                <input id="title-input" placeholder="Enter Title" type="text" onChange={e=>setTitle(e.target.value)} value={title}/>
                <input id="movies-input-1" placeholder="1st Favorite Movie" type="text" onChange={e=>setFirstMovie(e.target.value)} value={firstMovie}/>
                <input id="movies-input-2" placeholder="2nd Favorite Movie" type="text" onChange={e=>setSecondMovie(e.target.value)} value={secondMovie}/>
                <input id="movies-input-3" placeholder="3rd Favorite Movie" type="text" onChange={e=>setThirdMovie(e.target.value)} value={thirdMovie}/>
                <button id="submit-button" onClick={createPerson}>Submit</button>
                <button id="submit-button" onClick={() => setShowForm(false)}>Cancel</button>
            </div>}
            {!showForm && <div id="normal-form">
                {/* If there are people in the array, render the people HTML
                    Else - return No People H1 */}
                {people.length !== 0 ? 
                <>
                    <h1 className="counter">{personIndex + 1}/{people.length}</h1>
                    <h1 className="name">{people[personIndex].name.first + ' ' + people[personIndex].name.last}</h1>
                    <h2 className="subtext"><span id="bold">From:</span> {people[personIndex].city + ', ' + people[personIndex].country}</h2>
                    <h2 className="subtext"><span id="bold">Job Title:</span> {people[personIndex].title}</h2>
                    <h2 className="subtext"><span id="bold">Employer:</span> {people[personIndex].employer}</h2>
                    <h2 className="fav_persons"><span id="bold">Favorite movies:</span></h2>
                    <ol>
                        {
                            people[personIndex].favoriteMovies.map((el, index) => <li className="fav_person">{index + 1 +'. ' + el}</li>)
                        }
                    </ol>
                </> : <h1>No Peeps</h1>}
            </div>}
            {!showForm && <div className="buttons_wrapper">
                    <h1 id="prev-button" onClick={previousPerson}>←Previous</h1>
                    <section>
                        {people.length !== 0 && <button id="edit-button" onClick={editPerson}>Edit</button>}
                        {people.length !== 0 && <button id="delete-button" onClick={deletePerson}>Delete</button>}
                        <button id="new-button" onClick={() => setShowForm(true)}>New</button>
                    </section>
                    <h1 id="next-button" onClick={nextPerson}>Next→</h1>
                </div>}
        </div>
    )
}

export default Display