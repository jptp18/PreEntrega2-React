import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to={'/'}>
        <h3>Ecommerce</h3>
      </Link>
        
      <div className="Categorias">
          <NavLink to={`/category/celular`} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Celulares</NavLink>
          <NavLink to={`/category/tablet`} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Tablets</NavLink>
          <NavLink to={`/category/notebook`} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}>Notebooks</NavLink>
      </div>
      <CartWidget />
    </nav>

  )
}

export default NavBar