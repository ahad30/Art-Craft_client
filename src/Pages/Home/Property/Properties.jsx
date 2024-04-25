import React, { useEffect, useState } from 'react'
import Property from './Property';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Properties = () => {

    const [properties, setProperties] = useState([])

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setProperties(data))
        Aos.init()
    
     }, []);
    
      return (
        <div className='mb-5'>
            <h1 className='text-center text-3xl font-bold mt-5 mb-5'>Our Featured Properties For Sale and Rent</h1>
            <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" className="w-[98%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    properties.map(property  => 
                        <Property key={property.id}  property = {property} />
                      )
                }
            </div>
         
        </div>
 )
}

export default Properties