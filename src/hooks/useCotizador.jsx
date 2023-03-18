//Este useCotizador sera un hook personalizado que cumple la función de llamar al CotizadorContext y leerlo con el useContext, después todo eso meterlo dentro de una función que se exportara para luego poder ser utilizada en cualquier componente que importe la función useCotizador.jsx
import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";

const useCotizador = () => {
  return useContext(CotizadorContext)
}

export default useCotizador
