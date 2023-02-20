import React, {ReactElement, useState} from 'react';
import {DogContext} from "./context";
import {dogs} from "../../data/dogs";

const DogContextManager: React.FC<{children: ReactElement}> = ({ children }) => {
    const [dogsInDatabase, setDogsInDatabase] = useState(dogs);

    return <DogContext.Provider value={{ dogsInDatabase, setDogsInDatabase }}>{children}</DogContext.Provider>;
};

export default DogContextManager;
