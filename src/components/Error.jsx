import useCotizador from "../hooks/useCotizador"
const Error = () => {

    const {error} = useCotizador()

  return (
    
    <div>
      <p className=" border border-red-500 text-center bg-red-200 py-2 text-red-800 font-semibold">Todos los campos son obligatorios</p>
    </div>
  )
}

export default Error
