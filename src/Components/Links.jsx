import React from 'react';
import { NavLink } from 'react-router';

const Links = () => {
    return (
        <>
            <li>
  <NavLink 
    to={`/`} 
    className={({ isActive }) => isActive ? 'border text-blue-500 border-blue-500 rounded px-4 py-2' : ''}
  >
    Apps
  </NavLink>
</li>
<li>
  <NavLink 
    to={`/profile`} 
    className={({ isActive }) => isActive ? 'border border-blue-500 rounded px-2 py-1' : ''}
  >
    My Profile
  </NavLink>
</li>

        </>
    );
};

export default Links;