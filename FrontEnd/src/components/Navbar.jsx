import {Link} from "react-router-dom"
import { BsSearch } from "react-icons/bs";

function Navbar() {
    const user=false;
    return <>
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
    {/* Logo */}
    <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Lokavani</Link></h1>
    
    {/* Search */}
    <div className="flex justify-center items-center space-x-0">
        <p><BsSearch/></p>
        <input className="outline-none px-3" placeholder="search for a post"></input>
    </div>

    {/* Options */}
    <div className="md:flex items-center justify-center space-x-2 md:space-x-4">
        <h3>{user?<Link to='/write'>Write</Link>:<Link to='/login'>Login</Link>}</h3>
        <h3>{user?<Link to='/profile'>Profile</Link>:<Link to='/register'>Register</Link>}</h3>
    </div>

    </div>
    </>;
}

export default Navbar;