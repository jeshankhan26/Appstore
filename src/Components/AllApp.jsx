import React, { useContext } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import { AuthContext } from '../../public/Provider/AuthProvider';

const AllApp = () => {

    const {user}=useContext(AuthContext)

    const data =useLoaderData()
    console.log(data)
    return (
        <>
<div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => (
        <div key={index}>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src={item.banner || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                alt={item.name || "Card Image"}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name || "No Title"}</h2>
              <p>{item.description || "No description provided."}</p>
              <div className="flex justify-between text-sm mb-3">
                  <p>⭐ Rating: {item.rating}</p>
                  <p>⬇ Downloads: {item.downloads}</p>
                </div>
                <div className="card-actions justify-end">
                        {user ?<NavLink to={`/apps/${item.id}`} className="btn btn-primary btn-sm">View</NavLink> : <NavLink to={`/login`} className="btn btn-primary btn-sm">View</NavLink>}
                        
                      </div>
            </div>
          </div>
        </div>
      ))}
    </div>
            
        </>
    );
};

export default AllApp;