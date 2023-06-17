import  './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';


const navbar = () => {
  return (
   
      <header className="navbar navbar-expand-md  ">
        <div className="container-fluid">
          <Link to={"/"} className='logolink'>
          <img src="../../../image/logo.png" alt="proshop rugby" className='logonavbar' />
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <nav className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">                
                     
                     <NavLink to={`/`}> Home</NavLink>             
                 </li>

              <li className="nav-item">                
                     
                  <NavLink to={`/categoria/5`}> Accesorios</NavLink>             
              </li>
              <li className="nav-item">                
                    
                  <NavLink to={`/categoria/7`}> Proteccion</NavLink>                  
              </li>
              <li className="nav-item">               
                  <NavLink to={`/categoria/3`}> Moda</NavLink>            
              </li>   
              <li className="nav-item">               
                            
                  <NavLink to={`/categoria/2`}> Guindas</NavLink>     
              </li>          
            </ul>  
                   <CartWidget />   
          </nav>
          
        </div>  
              
      </header>
  
  );
}

export default navbar
