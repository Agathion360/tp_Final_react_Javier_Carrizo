import { useEffect,useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
//import { getProductos,getProductosCat } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import{collection, getDocs,where,query} from 'firebase/firestore'
import {db} from'../../services/config'

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos]=useState([])

  const {idCategoria} = useParams()


  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==",idCategoria)) : collection(db,"productos")
    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos)
      })
      .catch(error => console.error(error))
  
  },[idCategoria])

  

  return (
    <>
    <h2 className='saludo'>{greeting}</h2>
    <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer
