import React, {useState} from 'react';
import './App.css';
import {ImageAddresses} from "../dogs.types";
import {dogs} from "../data/dogs";
import AddingNewDogForm from "./adding-new-dog/AddingNewDogForm";
import DogsList from "./dog-list/DogsList";
import { saveDogsSomewhere } from "../services/database-service";

const App = () => {
    const [dogsInDatabase, setDogsInDatabase] = useState(dogs);

  return (
    <div>
        <h1> Dogs database </h1>
        <p>Current amount of dogs: <strong>{dogsInDatabase.length}</strong></p>
        <DogsList setDogsInDatabase={setDogsInDatabase} dogsInDatabase={dogsInDatabase} />
        <div>
            <h3>Adding new dog</h3>
            <AddingNewDogForm setDogsInDatabase={setDogsInDatabase} dogsInDatabase={dogsInDatabase} />
        </div>
        <button data-testid="save-button" onClick={saveDogsSomewhere}>Save dogs</button>
    </div>
  );
}

export default App;
