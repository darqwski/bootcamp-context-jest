import React, { useContext } from 'react';
import DogCard from "./DogCard";
import {DogContext} from "../context/context";

const DogsList: React.FC = () => {
    const { dogsInDatabase } = useContext(DogContext)

    return (
        <div style={{display: 'flex'}}>
            {dogsInDatabase.map(dog=>(
                <DogCard dog={dog} key={dog.dogId} />
            ))}
        </div>
    )
};

export default DogsList;
