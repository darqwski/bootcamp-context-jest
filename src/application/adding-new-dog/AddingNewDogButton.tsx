import React, {Dispatch, SetStateAction} from 'react';
import {IDog} from "../../dogs.types";

export interface IAddingNewDogButton {
    dogName: string
    setDogName: Dispatch<SetStateAction<string>>
    dogRace: string
    setDogRace: Dispatch<SetStateAction<string>>
    dogImg: string
    setDogImg: Dispatch<SetStateAction<string>>
    setDogsInDatabase: Dispatch<SetStateAction<IDog[]>>
    dogsInDatabase: IDog[]
}

const AddingNewDogButton: React.FC<IAddingNewDogButton> = ({ setDogName, setDogImg, setDogRace, dogImg, dogName, dogRace, setDogsInDatabase, dogsInDatabase}) => {

    const addNewDogIntoDatabase = () => {
        const dogId = dogsInDatabase.length > 0 ? dogsInDatabase[dogsInDatabase.length-1]?.dogId + 1 : 0;
        const dog: IDog = {
            dogId,
            dogName,
            dogRace,
            dogImage: dogImg
        }

        setDogsInDatabase(prevDogs => [...prevDogs, dog])
        setDogImg('')
        setDogName('')
        setDogRace('')
    }

    return  <button data-testid="add-dog-button" onClick={addNewDogIntoDatabase}>Add new dog</button>;
};

export default AddingNewDogButton;
