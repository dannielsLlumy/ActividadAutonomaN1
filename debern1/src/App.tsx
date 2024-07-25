
import { FuncionAreaCuadrado } from "./typescript/FuncionAreaCuadrado";
import { FuncionDividirPorCinco } from "./typescript/ArregloDividirValores";
import { FuncionSumaDeElementos } from "./typescript/FuncionSumaDeElementos";
import CalcularPromedio from "./typescript/CalcularPromedio";
import Acumulador from "./typescript/AcumuladorEnCinco";




const App: React.FC = () => {
  return (
    <div>

      <FuncionAreaCuadrado />
      <FuncionSumaDeElementos />
      <FuncionDividirPorCinco />
      <CalcularPromedio />  
      <Acumulador initialValue={5} />
      
      
    </div>
  );
};

export default App;
