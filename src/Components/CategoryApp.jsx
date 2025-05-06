import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router'; // corrected import
import { AuthContext } from '../../public/Provider/AuthProvider';

const CategoryApp = () => {
  const {user} =useContext(AuthContext)
  const { name } = useParams(); 
  const [filteredData, setFilteredData] = useState([]);
  const data = useLoaderData();
  console.log(name)

  useEffect(() => {
    if (Array.isArray(data)) {
      const filtered = data.filter(item => item.category === name);
      setFilteredData(filtered);
    }
  }, [data, name]); 

  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filteredData.map((item, index) => (
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
  );
};

export default CategoryApp;
