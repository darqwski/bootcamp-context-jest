import React, {Dispatch, SetStateAction, useContext, useState} from 'react';
import {IDog} from "../../dogs.types";
import {DogContext} from "../context/context";

const DogCard: React.FC<{dog: IDog }> = ({dog}) => {
    const { removeDog } = useContext(DogContext)

    const [angle, setAngle] = useState(0);

    return (
        <div data-testid="dog-card" >
            <img style={{transform: `rotate(${angle}deg)`}} src={dog.dogImage} className="dog-image"/>
            <p>{dog.dogName}</p>
            <p>{dog.dogRace}</p>
            <p>
                <button onClick={() => setAngle(prevAngle => prevAngle + 30)}>Left</button>
                <button onClick={() => setAngle(prevAngle => prevAngle - 30)}>Right</button>
            </p>
            <button onClick={() => removeDog(dog)}>Remove</button>
        </div>
    );
};

export default DogCard;
