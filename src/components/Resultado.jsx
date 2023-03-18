import { useCallback, useMemo, useRef } from "react"
import useCotizador from "../hooks/useCotizador"
import {MARCAS, PLANES, YEARS} from '../constants'

const Resultado = () => {

    const {resultadoFinal, datos} = useCotizador()
    const {marca, year, plan} = datos

    const [nombreMarca] = useMemo ( () =>
        MARCAS.filter(m => m.id === Number(marca)), 
    [resultadoFinal])

    const yearRef = useRef(year) 

    const [nombrePlan] = useMemo ( () =>
        PLANES.filter(p => p.id === Number(plan)), 
    [resultadoFinal])

    useCallback(() => year, [resultadoFinal])

    if(resultadoFinal===0) return null
  return (
    <div className="text-center bg-gray-100 mt-5 p-5 shadow">
        <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>
        <p className="my-2">
            <span className="font-bold">Marca: </span>{nombreMarca.nombre}
        </p>

        <p className="my-2">
            <span className="font-bold">Año: </span>{yearRef.current}
        </p>

        <p className="my-2">
            <span className="font-bold">Plan: </span>{nombrePlan.nombre}
        </p>

        <p className="my-2 text-2xl">
            <span className="font-bold">Total Cotización: </span>{resultadoFinal}
        </p>
    </div>
  )
}

export default Resultado
