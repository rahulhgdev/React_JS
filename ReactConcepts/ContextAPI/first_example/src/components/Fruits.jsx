import React, { useContext, useState } from 'react'
import FruitContext from '../context/FruitContext';

const Fruits = () => {
    const [fruitName, setFruitName] = useState('');
    const [fruitOrigin, setFruitOrigin] = useState('');
    const [fruitWeight, setFruitWeight] = useState('');

    const {setFruitNaam, setFruitPaida,setFruitWajan} = useContext(FruitContext);
    // const [setFruitPaida] = useContext(FruitContext);
    // const [setFruitWajan] = useContext(FruitContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFruitNaam({fruitName});
        setFruitPaida({fruitOrigin});
        setFruitWajan({fruitWeight});
    }

    return (
        <>
            <h2>Fruit details</h2>
            <input type="text" placeholder='Fruit Name' value={fruitName} onChange={(e) => {setFruitName(e.target.value)}} />
            <input type="text" placeholder='Fruit Origin' value={fruitOrigin} onChange={(e) => {setFruitOrigin(e.target.value)}} />
            <input type="number" placeholder='Fruit Weight' value={fruitWeight} onChange={(e) => {setFruitWeight(e.target.value)}} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Fruits