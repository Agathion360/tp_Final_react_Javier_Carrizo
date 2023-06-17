import { useState,useEffect } from "react"

const api="https://jsonplaceholder.typicode.com/users"

const Promesas = () => {
    const [usuarios,setUsuarios] = useState([])
    
    useEffect(()=>{
        // peticion a la api
        fetch(api)
            .then(respuesta => respuesta.json())
            .then(data => setUsuarios(data))
            .catch(error => alert(error))
    },[])




  return (
    <div>
      <h2>Usuarios de JsonPlaceHolder</h2>
      {
        usuarios.map(usuario => {
            return(
                <div key={usuario.id}>
                    <p>Nombre: {usuario.name}</p>
                    <p>email: {usuario.email}</p>
                    <p>calle: {usuario.address.street}</p>
                    <hr/>
                </div>
            )
        })
      }
    </div>
  )
}

export default Promesas
