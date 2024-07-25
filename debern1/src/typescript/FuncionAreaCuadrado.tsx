
//1. Crear una función con parámetros que permita calcular el área de un cuadrado.

import React, { useState } from 'react';
import { calcularAreaCuadrado } from '../components/CalcularAreaCuadrado';

export const FuncionAreaCuadrado: React.FC = () => {
  const [lado, Lado] = useState<number>(0);
  const [area, Area] = useState<number>(0);

  const cambiarLado = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuevoLado = parseFloat(e.target.value);
    Lado(nuevoLado);
    Area(calcularAreaCuadrado(nuevoLado));
  };

  return (
    <div>
      <h1>1. Calculador del Área de un Cuadrado:</h1>
      <hr />
      <br />
      <input
        type="number"
        value={lado}
        onChange={(e) => cambiarLado(e)}
        placeholder="Ingresa el valor del lado"
      />
      <p>El área del cuadrado es: {area}</p>
      <hr />
    </div>
  );
};
