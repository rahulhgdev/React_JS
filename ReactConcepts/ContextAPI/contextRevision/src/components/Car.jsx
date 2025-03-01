import React, { useContext, useState } from 'react'
import useCarContext from '../context/CarContext';

const Car = () => {
    const [carName, setCarName] = useState('');
    const [carType, setCarType] = useState('');
    const [carDriven, setCarDriven] = useState('');

    const {setCarNaam, setCarPrakar, setCarKitiKm} = useCarContext();

    const handleSubmit = () => {
        setCarNaam(carName);
        setCarPrakar(carType);
        setCarKitiKm(carDriven);
    }
    return (
        <>
            <input type="text" placeholder='Car Name' value={carName} onChange={(e)=>{setCarName(e.target.value)}}/>
            <input type="text" placeholder='Car Type' value={carType} onChange={(e)=>{setCarType(e.target.value)}}/>
            <input type="number" placeholder='Car Driven' value={carDriven} onChange={(e)=>{setCarDriven(e.target.value)}}/>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Car