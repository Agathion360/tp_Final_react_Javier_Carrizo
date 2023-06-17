import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import  './Cart.css'

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

    if(cantidadTotal ===0){
        return(
            <>
            <h2>No hay productos en el carrito</h2>
            <Link className="btn-gen" to="/">Ver Productos</Link>
            </>
        )
    }

  return (
    <div className="carritoCont">
        
        {carrito.map(producto => <CartItem key={producto.id} {...producto}/>)}
           <hr />
           <div className="pie-carito">
                <h3>Total: ${total}</h3>
                <h3>Cantidad Total: {cantidadTotal}</h3>
                
                <button className="btn-gen" onClick={()=> vaciarCarrito()}><i class="fa-solid fa-trash"></i> Vaciar Carrito</button>
                <Link className="btn-gen" to='/checkout'><i class="fa-solid fa-money-bill-wave"></i> Finalizar Compra</Link>
            </div>
    </div>
  )
}

export default Cart
