import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
  }
  return (
    <div className="navbar bg-emerald-500 fixed z-40 bg-opacity-80">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li> <Link to={"/"}>Home</Link> </li>
            <li> <Link to={"/about"}>About</Link> </li>
            <li> <Link to={"/login"}>Login</Link> </li>
            <li> <Link to={"/dashboard"}>Dashboard</Link> </li>

          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to={"/"} className="btn btn-ghost text-xl">Paradise</Link>
      </div>
      <div className="navbar-end">
        <ul>
          {
            user ?
              <>
                <ul className="flex items-center">
                  <li><button onClick={() => handleLogout()} className="btn btn-error btn-sm me-4">Logout</button></li>
                  <li> <img className="w-12 btn-circle" src={user.photoURL} alt="" /> </li>
                </ul>

              </> :
              <div className="dropdown">
                <div className="text-3xl hover:scale-105"> <button className="" ><FaUserCircle /></button> </div>
                <ul className="dropdown-content w-40 bg-base-100 mt-3 -ms-28 p-2 rounded-md">
                  <li className="btn btn-sm w-full btn-link hover:bg-red-600">login</li>
                  <li>login</li>
                </ul>
              </div>
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;