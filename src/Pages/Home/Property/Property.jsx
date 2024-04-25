import 'animate.css';
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


const Property = ({property}) => {
const {id,estate_title, category_name, status ,location , facilities ,image} = property

  return (
  <div className=''>
<div  className="overflow-hidden rounded-3xl shadow transition hover:shadow-lg">
<div className=''>
<img
    alt=""
    src={image}
    className=" w-[400px] h-[314px] p-10 animate__animated animate__heartBeat"
  />

</div>
  <div className="bg-white space-y-3 p-4 sm:p-6">

  <div className='mb-2 flex gap-5'>
    {
      facilities?.map((facility,idx) => 
      <ul key={idx} className='text-sm text-[#23BE0A] font-medium'>
        <li>{facility}</li>
      </ul>
      )  
    }
   </div>

  <h1 className='font-bold'>{estate_title}</h1>
  <div className='flex items-center space-x-2'>
  <IoLocationOutline/>
  <p className='text-[#13131380]'> {location}</p>
  <p className='text-sm bg-[#23BE0A] p-1 text-white  me-2'>For {status}</p>
  </div>
  <p>$ <span className='text-[#23BE0A] font-bold'>{property.price}</span> </p>

    <div className='flex items-center justify-between gap-4 text-[#878787] mb-3'>
        <div className='flex items-center  gap-2'>
          <p className='text-sm'>#{category_name}</p>
        </div>
        <div className='flex items-center gap-1'>
        <Link to= {`/propertyDetails/${id}`}>
          <button className='text-sm bg-[#23BE0A] p-2 text-white rounded-md'>View Details</button>
        </Link>
        </div>        
    </div>

  </div>
</div>
</div>
  )
}


Property.propTypes = {
property: PropTypes.object.isRequired
}

export default Property;