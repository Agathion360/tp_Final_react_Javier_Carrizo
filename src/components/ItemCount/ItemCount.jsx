import { useState } from "react"
import { Link } from 'react-router-dom';
import './ItemCount.css'

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const[contador, setContador] = useState(inicial)


    const incrementar = () =>{
        if(contador < stock){
            setContador(contador +1)
        }
    }

    const decrementar = () =>{
        if(contador > inicial){
            setContador(contador -1)
        }
    }

  return (
    <>
      <div className="botonera">
        <button className='btn-stock' onClick={ decrementar }>-</button>
        <strong className="stock">{contador}</strong>
        <button className='btn-stock' onClick={ incrementar }>+</button>
      </div>
      { stock > 0 && <button className='btn-gen' onClick={()=> funcionAgregar(contador)}> Agregar al Carrito </button>}
    </>
  )
}

export default ItemCount
