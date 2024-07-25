import React, { useState, useEffect } from 'react';

interface Alumno {
  name: string;
  edad: number;
  calificacion: number;
}

const alumnos: Alumno[] = [
  {
    name: 'Viviana',
    edad: 19,
    calificacion: 10,
  },
  {
    name: 'Wendy',
    edad: 20,
    calificacion: 8,
  },
  {
    name: 'Gerson',
    edad: 18,
    calificacion: 9,
  }
];

// Función para calcular el promedio
const calcularPromedio = (alumnos: Alumno[]): number => {
  const sumCalificaciones = alumnos.reduce((acumulado, alumno) => acumulado + alumno.calificacion, 0);
  return sumCalificaciones / alumnos.length;
};

// Componente CalcularPromedio
const CalcularPromedio: React.FC = () => {
  const [promedio, setPromedio] = useState<number>(0);

  useEffect(() => {
    setPromedio(calcularPromedio(alumnos));
  }, []);

  return (
    <div>
      <h1>4. Alumnos y promedios:</h1>
      <ul>
        {alumnos.map((alumno, index) => (
          <li key={index}>
            {alumno.name} ({alumno.edad} años) - Calificación: {alumno.calificacion}
          </li>
        ))}
      </ul>
      <p>Promedio de calificaciones: {promedio.toFixed(2)}</p>
      <hr />
    </div>
  );
};

export default CalcularPromedio;
