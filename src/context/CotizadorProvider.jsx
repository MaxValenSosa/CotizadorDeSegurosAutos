import { useState, createContext } from "react";
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from "../helpers";

const CotizadorContext = createContext()


const CotizadorProvider = ({children}) => {
    

    const [datos, setDatos] = useState({
        marca:'',
        year:'',
        plan:''
    })

    const [error, setError] = useState(false)
    const [resultadoFinal, setResultadoFinal] = useState(0)
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = () => {
        //Una base
            let resultado = 15000
        //Obtener diferencia de años
            const difAño = obtenerDiferenciaYear(datos.year)
        
        //Hay que restar el 3% por cada año
        resultado = resultado - (difAño*3*resultado/100)
        
        // Agregarle el extra de la marca
        resultado *= calcularMarca(datos.marca)
        
        //Agregarle es extra del plan Básico o Completo
        resultado *= calcularPlan(datos.plan)

        //Cambier el formato de los números para que se muestren en pesos argentinos
        resultado = formatearDinero(resultado)

        setCargando(true)

        setTimeout(() =>{
            setResultadoFinal(resultado) 
            setCargando(false)   
        },2500)
        
    }

  return (
    <CotizadorContext.Provider
    value={{
        datos,
        handleChangeDatos,
        setError,
        error,
        cotizarSeguro,
        resultadoFinal,
        cargando
    }}
    >
        {children}
    </CotizadorContext.Provider>
  )
}

export {
    CotizadorProvider
}
export default CotizadorContext
