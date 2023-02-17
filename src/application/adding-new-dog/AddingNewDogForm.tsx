import React, {Dispatch, SetStateAction, useState} from 'react';
import AddingNewDogButton from "./AddingNewDogButton";
import {IDog} from "../../dogs.types";

const AddingNewDogForm: React.FC<{ setDogsInDatabase: Dispatch<SetStateAction<IDog[]>>, dogsInDatabase: IDog[] }> = ({ setDogsInDatabase, dogsInDatabase }) => {
    const [dogName, setDogName] = useState('')
    const [dogRace, setDogRace] = useState('')
    const [dogImg, setDogImg] = useState('')
    return <div>
        <p>
            <label htmlFor="dog-name-input">Insert dog name: </label>
            <input id="dog-name-input" data-testid="add-dog-name" value={dogName} onChange={(e) => setDogName(e.target.value)} />
        </p>
        <p>
            <label htmlFor="dog-name-race">Insert dog race: </label>
            <input id="dog-name-race" value={dogRace} onChange={(e) => setDogRace(e.target.value)} />
        </p>
        <p>
            <label htmlFor="dog-name-img">Insert dog image: </label>
            <input id="dog-name-img" value={dogImg} onChange={(e) => setDogImg(e.target.value)} />
        </p>
        <AddingNewDogButton
            dogsInDatabase={dogsInDatabase}
            setDogsInDatabase={setDogsInDatabase}
            dogImg={dogImg}
            setDogImg={setDogImg}
            dogName={dogName}
            dogRace={dogRace}
            setDogName={setDogName}
            setDogRace={ setDogRace}
        />
    </div>;
};

export default AddingNewDogForm;
