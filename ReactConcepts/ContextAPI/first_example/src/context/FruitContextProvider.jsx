import React, { useState } from 'react'
import FruitContext from './FruitContext'

const FruitContextProvider = ({ children }) => {
    const [fruitNaam, setFruitNaam] = useState(null);
    const [fruitPaida, setFruitPaida] = useState(null);
    const [fruitWajan, setFruitWajan] = useState(null);

    return (
        <FruitContext.Provider value={{fruitNaam, setFruitNaam, fruitPaida, setFruitPaida, fruitWajan, setFruitWajan}}>
            {children}
        </FruitContext.Provider>
    )
}

export default FruitContextProvider