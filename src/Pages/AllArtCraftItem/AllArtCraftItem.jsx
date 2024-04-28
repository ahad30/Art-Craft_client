import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom"


const AllArtCraftItem = () => {
 
const loadedItems = useLoaderData();
const [allArtItems , setAllArtItems] = useState(loadedItems);
// const { _id ,  itemName, subcategoryName, price, rating , userName} = allArtItems

// console.log(loadedItems);
  return (

    <div className="overflow-x-auto max-w-3xl  mx-auto">
    <table className="table">
        {/* head */}
        <thead className="">
            <tr className="">
                <th></th>
                <th>User Name</th>
                <th>Item</th>
                <th>Subcategory</th>
                <th>Price</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
            {
                allArtItems.map((allArtItem , index) => <tr key={allArtItem._id}>
                    <th>{index+1}</th>
                    <td>{allArtItem.userName}</td>
                    <td>{allArtItem.itemName}</td>
                    <td>{allArtItem.subcategoryName}</td>
                    <td>{allArtItem.price}</td>
                    <td>{allArtItem.rating}</td>
                    <td>
                    <Link to= {`/artCraftDetails/${allArtItem?._id}`}>
                    <button className='text-sm bg-[#23BE0A] p-2 text-white rounded-md'>View Details</button>
                  </Link>
                    </td>
                </tr>)
            }

        </tbody>
    </table>
</div>
  )
}

export default AllArtCraftItem