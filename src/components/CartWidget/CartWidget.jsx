import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import  './CartWidget.css'
import { Link } from 'react-router-dom';



const CartWidget = () => {
  const{cantidadTotal} = useContext(CarritoContext)


  return (
    <div className='contenedorCarrito d-flex'>
      <Link to='./cart'>
        <img className='carrito' src="../image/Cart.png"alt="carrito" />
       {
        cantidadTotal > 0 && <p className='cantidad'>{cantidadTotal}</p>
       }       
        </Link>
    </div>
    
  );
}

export default CartWidget
