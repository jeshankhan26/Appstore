import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/category.json')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching category:', error));
  }, []);

  return (
    <div className="navbar bg-base-100 shadow-sm md:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to={`/items/`} className='pt-1 px-2'>All Items</NavLink>
            {categories.map((item, index) => (
              <li key={index}>
                <NavLink to={`/items/${item.category}`}>{item.category}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <NavLink to={`/items/`} className='pt-1 px-2'>All Items</NavLink>
          {categories.map((item, index) => (
            <li key={index}>
              <NavLink to={`/items/${item.category}`}>{item.category}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Optional end slot for logo or icons */}
      <div className="navbar-end">
        
      </div>
    </div>
  );
};

export default Category;
