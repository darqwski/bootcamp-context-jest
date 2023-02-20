import React, {Dispatch, SetStateAction, useContext} from 'react';
import {IDog} from "../../dogs.types";
import DogCard from "./DogCard";
import {DogContext} from "../context/context";

const DogsList: React.FC = () => {
    const { setDogsInDatabase, dogsInDatabase } = useContext(DogContext)

    return (
        <div style={{display: 'flex'}}>
            {dogsInDatabase.map(dog=>(
                <DogCard setDogsInDatabase={setDogsInDatabase} dog={dog} key={dog.dogId} />
            ))}
        </div>
    )
};

export default DogsList;
