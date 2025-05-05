import React, { use, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { NavLink, useLoaderData } from 'react-router';
import { AuthContext } from '../../public/Provider/AuthProvider';

const Education = () => {
  const data = useLoaderData(); 
  const [educationData, setEducationData] = useState([]);
  const {user}=use(AuthContext);

  useEffect(() => {
    if (Array.isArray(data)) {
      const filtered = data.filter((item) => item.category === "Education");
      setEducationData(filtered);
    }
  }, [data]);

  return (
    <div className='my-10'>
      <h1 className='text-2xl font-semibold text-center'>Education App</h1>
      <Marquee>
        <div className='flex gap-3 pt-3 pl-3'>
          {educationData.map((item, index) => (
            <div key={index} className="w-96 bg-base-100 shadow-md rounded-xl overflow-hidden">
              <figure>
                <img
                  src={item.banner}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <div className="flex justify-between text-sm mb-3">
                  <p>⭐ Rating: {item.rating}</p>
                  <p>⬇ Downloads: {item.downloads}</p>
                </div>
                <div className="card-actions justify-end">
                        {user ?<NavLink to={`/apps/${item.id}`} className="btn btn-primary btn-sm">View</NavLink> : <NavLink to={`/login`} className="btn btn-primary btn-sm">View</NavLink>}
                        
                      </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Education;
