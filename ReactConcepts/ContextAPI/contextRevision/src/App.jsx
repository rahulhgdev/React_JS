import { useState } from 'react';
import Car from './components/Car';
import CarDetails from './components/CarDetails';
import { CarProvider } from './context/CarContext';

function App() {
  const [carNaam, setCarNaam] = useState('');
  const [carPrakar, setCarPrakar] = useState('');
  const [carKitiKm, setCarKitiKm] = useState(0);
  return (
    <CarProvider value={{ carNaam, setCarNaam, carPrakar, setCarPrakar, carKitiKm, setCarKitiKm }}>
      <h1>Car Details</h1>
      <Car />
      <CarDetails />
    </CarProvider>
  )
}

export default App
