import React, {Dispatch, SetStateAction, useContext} from 'react';
import {DogContext} from "../context/context";

export interface IAddingNewDogButton {
    dogName: string
    setDogName: Dispatch<SetStateAction<string>>
    dogRace: string
    setDogRace: Dispatch<SetStateAction<string>>
    dogImg: string
    setDogImg: Dispatch<SetStateAction<string>>
}

const AddingNewDogButton: React.FC<IAddingNewDogButton> = ({ setDogName, setDogImg, setDogRace, dogImg, dogName, dogRace}) => {
    const { addNewDogIntoDatabase } = useContext(DogContext)

    const addNewDogIntoDatabaseAndClearForm = () => {
        addNewDogIntoDatabase(dogName,dogRace, dogImg);
        setDogImg('')
        setDogName('')
        setDogRace('')
    }

    return  <button data-testid="add-dog-button" onClick={addNewDogIntoDatabaseAndClearForm}>Add new dog</button>;
};

export default AddingNewDogButton;
