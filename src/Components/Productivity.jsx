import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { useLoaderData } from 'react-router'; 

const Productivity = () => {
    const data = useLoaderData();
    const [productivity, setProductivity] = useState([]);

    useEffect(() => {
        const productivityFilter = data.filter((item) => item.category === "Productivity");
        setProductivity(productivityFilter); 
    }, [data]); 



    return (
       <>
        <div className='my-10'>
            <h1 className='text-2xl font-semibold text-center '>Productivity App</h1>
            <Marquee>
            <div className='flex gap-3 pt-3 pl-3'>
                {productivity.map((item, index) => (
                    <div key={index} className="card bg-base-100 image-full w-96 shadow-sm">
                    <figure>
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.name}</h2>
                      <p>{item.description}</p>
                      <div className='flex justify-between'>
                      <p>Rating : {item.rating}</p>
                      <p>Downloads : {item.downloads}</p>
                      </div>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">View</button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            </Marquee>
        </div>
       </>
    );
};

export default Productivity;
