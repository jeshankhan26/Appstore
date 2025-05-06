import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../public/Provider/AuthProvider';

const Links = () => {

  const {user}=use(AuthContext);
    return (
        <>
            <li>
  <NavLink 
    to={`/`} 
    className={({ isActive }) => isActive ? 'border text-blue-500 border-blue-500 rounded px-4 py-2' : ''}
  >
    Home
  </NavLink>
</li>
{
  user ? <li>
  <NavLink 
    to={`/items`} 
    className={({ isActive }) => isActive ? 'border text-blue-500 border-blue-500 rounded px-4 py-2 mx-3' : ''}
  >
    Apps
  </NavLink>
</li>:''
}
            
<li>
    <NavLink
      to={user ? `/app/${user.uid}` : '/login'}
      className={({ isActive }) =>
        isActive ? 'border text-blue-500 border-blue-500 rounded px-4 py-2' : ''
      }
    >
      My Profile
    </NavLink>
</li>


        </>
    );
};

export default Links;