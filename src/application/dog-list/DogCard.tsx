import React, {Dispatch, SetStateAction, useState} from 'react';
import {IDog} from "../../dogs.types";

const DogCard: React.FC<{dog: IDog, setDogsInDatabase: Dispatch<SetStateAction<IDog[]>> }> = ({dog, setDogsInDatabase}) => {
    const [angle, setAngle] = useState(0);
    const removeDog = () => {
        setDogsInDatabase(prevDogs=>prevDogs.filter(prevDog => prevDog.dogId !== dog.dogId));
    }

    return (
        <div >
            <img style={{transform: `rotate(${angle}deg)`}} src={dog.dogImage} className="dog-image"/>
            <p>{dog.dogName}</p>
            <p>{dog.dogRace}</p>
            <p>
                <button onClick={() => setAngle(prevAngle => prevAngle + 30)}>Left</button>
                <button onClick={() => setAngle(prevAngle => prevAngle - 30)}>Right</button>
            </p>
            <button onClick={() => removeDog()}>Remove</button>
        </div>
    );
};

export default DogCard;
