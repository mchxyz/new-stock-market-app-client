import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./AuthProvider"

const Navbar = () => {

const { user, setToken } = useContext(AuthContext);

const handleClickLogout = () => {
        setToken(undefined);
    };

  return (
<nav>
    <Link to='/'>Home</Link>
    <Link to='/companies'>Browse Companies</Link>

{!user &&
<>
 <Link to='/signup'>Signup</Link>
<Link to='/login'>Login</Link>
</>

}
    
 {user &&
    <button onClick={handleClickLogout}>Logout</button >

 }

</nav>
  )
}

export default Navbar