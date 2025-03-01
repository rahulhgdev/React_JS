import { useContext, createContext} from "react";

export const CarContext = createContext({
    carNaam: '',
    setCarNaam: () => {},
    carPrakar: '',
    setCarPrakar: () => {},
    carKitiKm: '',
    setCarKitiKm: () => {},
})

export const CarProvider = CarContext.Provider;

export default function useCarContext() {
    return useContext(CarContext);
}