import { Link } from "react-router-dom"
import "./Item.css"



const Item = ({id,nombre,precio,img}) => {
  return (
    <div className="producto" key={id}>
      <img src={img} alt={nombre} className="imgProducto"/>
      <h3 className="nombreProducto">Nombre: <strong>{nombre}</strong> </h3>
      <p>Precio: <strong>${precio}</strong></p>
      <Link to={  `/item/${id}`} className="btnDetalleProduct">Ver Detalles</Link>
      
    </div>
  )
}

export default Item
