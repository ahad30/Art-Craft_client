import React, { useEffect, useState } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import SingleArtCraft from './SingleArtCraft';

const ArtCraft = ({loadedItems}) => {
    console.log(loadedItems)
    const [artCraft, setArtCraft] = useState(loadedItems);
    
    useEffect(() => {
        Aos.init()
     }, []);


      return (
        <div className='mb-5'>
            <h1 className='text-center text-3xl font-bold mt-5 mb-5'>Our Featured Craft Items</h1>
            <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" className="w-[98%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    artCraft.map(artCraftItem  => 
                        <SingleArtCraft key={artCraftItem?._id}  artCraftItem={artCraftItem} setArtCraft={setArtCraft}></SingleArtCraft>
                      )
                }
            </div>
         
        </div>
 )
}

export default ArtCraft;