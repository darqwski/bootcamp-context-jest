import React, {Dispatch, SetStateAction} from 'react';
import {IDog} from "../../dogs.types";
import DogCard from "./DogCard";

const DogsList: React.FC<{
    setDogsInDatabase: Dispatch<SetStateAction<IDog[]>>
    dogsInDatabase: IDog[]
}> = ({ dogsInDatabase, setDogsInDatabase}) => {

    return (
        <div style={{display: 'flex'}}>
            {dogsInDatabase.map(dog=>(
                <DogCard setDogsInDatabase={setDogsInDatabase} dog={dog} key={dog.dogId} />
            ))}
        </div>
    )
};

export default DogsList;
