import {createContext, Dispatch, SetStateAction} from "react";
import {IDog} from "../../dogs.types";

export const DogContext = createContext<{ dogsInDatabase: IDog[], setDogsInDatabase: Dispatch<SetStateAction<IDog[]>>   }>({ dogsInDatabase: [], setDogsInDatabase: () => {
    console.log("NIE MA CONTEXTU")
    }   })