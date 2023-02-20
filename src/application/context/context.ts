import {createContext} from "react";
import {IDog} from "../../dogs.types";

export const DogContext = createContext<{
    dogsInDatabase: IDog[],
    removeDog: (dog: IDog) => void
    addNewDogIntoDatabase: (dogName: string, dogRace: string, dogImg: string) => void
}>({
    dogsInDatabase: [],
    removeDog: () => {},
    addNewDogIntoDatabase: () => {}
})