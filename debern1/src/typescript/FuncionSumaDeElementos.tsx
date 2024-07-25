
// 2.	Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne la suma de los elementos del arreglo. 

import React, { useState } from 'react';
import { sumarElementos } from '../components/SumaDeElementos';

export const FuncionSumaDeElementos: React.FC = () => {
  const [numeros, Numeros] = useState<number[]>([]);
  const [nuevoNumero, NuevoNumero] = useState<string>('');
  const [suma, Suma] = useState<number>(0);

  const CambioEntrada = (e: React.ChangeEvent<HTMLInputElement>) => {
    NuevoNumero(e.target.value);
  };

  const AñadirNumero = () => {
    const numero = parseFloat(nuevoNumero);
    if (!isNaN(numero)) {
      const nuevosNumeros = [...numeros, numero];
      Numeros(nuevosNumeros);
      Suma(sumarElementos(nuevosNumeros));
      NuevoNumero('');
    }
  };

  return (
    <div>
      <h3>2. Función Suma De Elementos:</h3>
      <hr />
      <br />
      <input
        type="number"
        value={nuevoNumero}
        onChange={(e) => CambioEntrada(e)}
        placeholder="Ingresa un número"
      />
      <button onClick={AñadirNumero}>Añadir Número</button>
      <p>Arreglo: {JSON.stringify(numeros)}</p>
      <p>Suma de los elementos: {suma}</p>
      <hr />
    </div>
  );
};
