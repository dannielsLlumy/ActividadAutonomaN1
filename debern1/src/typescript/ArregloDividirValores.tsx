// FuncionDividirPorCinco.tsx
import React, { useState } from 'react';
import { dividirPorCinco } from '../components/ValoresDivididosPara5';

export const FuncionDividirPorCinco: React.FC = () => {
  const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const [nuevoArreglo, setNuevoArreglo] = useState<number[]>([]);

  const Dividir = () => {
    const resultado = dividirPorCinco(arreglo);
    setNuevoArreglo(resultado);
  };

  return (
    <div>
      <h3>3. Arreglo Original de la División:</h3>
      <p>{JSON.stringify(arreglo)}</p>
      <button onClick={Dividir}>Dividir por 5</button>
      <h3>Nuevo Arreglo:</h3>
      <p>{JSON.stringify(nuevoArreglo)}</p>
      <hr />
    </div>
  );
};
