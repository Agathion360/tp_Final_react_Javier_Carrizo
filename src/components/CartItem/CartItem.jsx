import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import  './CartItem.css'
    

const CartItem = ({item,cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext)
  return (
    <div className="itemCarrito">
        <h4>{item.nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: {item.precio}</p>
        <button className = "btn-gen" onClick={()=> eliminarProducto(item.id)}><i class="fa-solid fa-xmark"></i> Eliminar</button>
    </div>
  )
}

export default CartItem
