import React, { useState } from 'react'
import CarContext from './CarContext'
const CarContextProvider = ({ children }) => {
    const[carNaam, setCarNaam] = useState(null);
    const[carPrakar, setCarPrakar] = useState(null);
    const[carKitiKm, setCarKitiKm] = useState(0);
    return (
        <CarContext.Provider value={{carNaam, setCarNaam, carPrakar, setCarPrakar, carKitiKm, setCarKitiKm}}>
            {children}
        </CarContext.Provider>
    )
}

export default CarContextProvider