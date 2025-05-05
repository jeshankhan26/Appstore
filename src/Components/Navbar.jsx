import React, { use } from 'react';
import Links from './Links';
import { NavLink } from 'react-router';
import logo from "../../public/Modern_Letter_S_Logo-removebg-preview (1).png";
import { AuthContext } from '../../public/Provider/AuthProvider';

const Navbar = () => {

  const {user,logout}=use(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Logout successful");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });}
    return (
        <>
        
        <div className="navbar bg-base-100 shadow-sm md:px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <Links></Links>
      </ul>
    </div>
    <img src={logo} className='w-15 md:w-25' alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <Links></Links>
    </ul>
  </div>
  <div className="navbar-end">
  {user ? <button onClick={handleLogout} className="btn btn-primary btn-outline">Logout</button> :<NavLink to={`/login`} className="btn btn-primary btn-outline">Login</NavLink>}
    
  </div>
</div>
            
        </>
    );
};

export default Navbar;