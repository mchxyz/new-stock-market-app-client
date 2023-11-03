import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import './style.css';

const Navbar = () => {

const { user, setToken } = useContext(AuthContext);

const handleClickLogout = () => {
        setToken(undefined);
    };

  return (
<nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-nav nav-item nav-link active">
    <div className="container">
    <Link className="nav-link" to='/'>Home</Link>
    <Link className="nav-link" to='/companies'>Trending Companies</Link>

{!user &&
<>
 <Link className="nav-link" to='/signup'>Sign up</Link>
<Link className="nav-link" to='/login'>Log in</Link>
</>

}
    
 {user &&
    <button onClick={handleClickLogout}>Logout</button >

 }
</div>
</nav>
  )
}

export default Navbar