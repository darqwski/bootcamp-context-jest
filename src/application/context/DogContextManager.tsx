import React, {ReactElement, useState} from 'react';
import {DogContext} from "./context";
import {dogs} from "../../data/dogs";
import {IDog} from "../../dogs.types";

const DogContextManager: React.FC<{children: ReactElement}> = ({ children }) => {
    const [dogsInDatabase, setDogsInDatabase] = useState(dogs);

    const removeDog = (dog: IDog) => {
        setDogsInDatabase(prevDogs=>prevDogs.filter(prevDog => prevDog.dogId !== dog.dogId));
    }

    const addNewDogIntoDatabase = (dogName: string, dogRace: string, dogImg: string ) => {
        const dogId = dogsInDatabase.length > 0 ? dogsInDatabase[dogsInDatabase.length-1]?.dogId + 1 : 0;
        const dog: IDog = {
            dogId,
            dogName,
            dogRace,
            dogImage: dogImg
        }

        setDogsInDatabase(prevDogs => [...prevDogs, dog])
    }


    return <DogContext.Provider value={{ dogsInDatabase, removeDog, addNewDogIntoDatabase }}>{children}</DogContext.Provider>;
};

export default DogContextManager;
