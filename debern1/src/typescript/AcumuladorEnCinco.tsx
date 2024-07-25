// components/Acumulador.tsx
import React, { useState } from 'react';

interface AcumuladorProps {
  initialValue: number;
}


const Acumulador: React.FC<AcumuladorProps> = ({ initialValue }) => {
  const [acumulador, setAcumulador] = useState(initialValue);

  const handleIncrement = () => {
    setAcumulador(acumulador + 5);
  };

  const handleDecrement = () => {
    setAcumulador(acumulador - 5);
  };

  return (
    <div>
        <h2>5. Acumulador de 5 a 5:</h2>
      <p>Acumulador: {acumulador}</p>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Disminuir</button>
    </div>
  );
};

export default Acumulador;