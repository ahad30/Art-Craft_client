
import { useLoaderData, useParams } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
const PropertyDetails = () => {
  const properties = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const property = properties.find(property => property.id === idInt);

  return (
    <div className='max-w-4xl mx-auto'>
      <div className='flex flex-col lg:flex-row  lg:justify-between bg-gray-50 rounded-md p-10'>
        <div className='space-y-6 lg:space-y-3 lg:w-[70%]'>
          
          <p className='font-bold'>{property.estate_title}</p>
          <p>{property.description}</p>
          <div className='flex items-center space-x-2'>
            <IoLocationOutline />
            <p className='text-[#13131380]'> {property.location}</p>
          </div>
          <div className='mb-2 flex flex-col lg:flex-row'>
            <ul className='text-sm text-[#23BE0A] font-medium'>
              <li>{property.facilities}</li>
            </ul>
          </div>
        </div>

        <div className='space-y-6 lg:space-y-3'>
          <p>$ <span className='text-[#23BE0A] font-bold'>{property.price}</span> </p>
          <p className='text-sm bg-[#23BE0A] p-1 text-white  me-2'>For {property.status}</p>
          <p>{property.area} sqft</p>
          <p>#{property.category_name}</p>
        </div>
      </div>
      <div>
        <img src={property.image} alt="" className='lg:w-full w-[90%] mx-auto'/>
      </div>
    </div>
  )
}

export default PropertyDetails