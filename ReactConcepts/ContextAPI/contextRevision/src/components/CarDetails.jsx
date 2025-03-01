import React, { useContext } from 'react'
import useCarContext from '../context/CarContext'

const CarDetails = () => {
    const {carNaam, carPrakar, carKitiKm} = useCarContext();
    return (
        <>
            <h2>Car Name: { carNaam }</h2>
            <p>Car Type: { carPrakar }</p>
            <p>Car Driven(In Km.): { carKitiKm }</p>
        </>
    )
}

export default CarDetails