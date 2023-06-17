import { useContext, useState } from 'react'
import  './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext.js'


const ItemDetail = ({id,nombre,precio,img,stock}) => {
  const[agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarProducto} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad)
    
    const item = {id,nombre,precio}
    agregarProducto(item,cantidad)
  }

  return (
  
    <div className="card mb-3 contenedorItem" >
  <div className="row g-0">
    <div className="col-md-8 contimg">
      <img src={img} alt={nombre} className="img-fluid rounded-start imgproducto"  />
    </div>
    <div className="col-md-4">
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <div className="is-divider small"></div>
        <p className="card-text">Precio: <strong> <small>$</small> {precio}</strong></p>
        <p className="card-text">Id: <strong> {id}</strong></p>
        <p className="carde-txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae nobis nam eius hic velit a facilis, commodi quo provident modi? Laudantium velit ab odit qui, provident doloribus officia iure aperiam?</p>
        {
            agregarCantidad > 0 ? (<Link to="/cart" className='btn-gen'> Terminar Compra</Link>) : <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>
        }
           <Link to="/" className = "btn-gen" > Seguir Comprando</Link>

      </div>
    </div>
  </div>
</div>

  )
}

export default ItemDetail
