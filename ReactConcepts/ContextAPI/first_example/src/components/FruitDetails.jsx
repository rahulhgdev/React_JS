import React, { useContext } from 'react'
import FruitContext from '../context/FruitContext'

const FruitDetails = () => {
    const {fruitNaam, fruitPaida, fruitWajan} = useContext(FruitContext);
    if(!fruitNaam && !fruitPaida && !fruitWajan) return <h2>Fruit data not found</h2>
    return (
        <>
            <h2>Fruit Name : { fruitNaam.fruitName }</h2>
            <p>Fruit Origin : { fruitPaida.fruitOrigin }</p>
            <p>Fruit Weight : { fruitWajan.fruitWeight }</p>
        </>
    )
}

export default FruitDetails