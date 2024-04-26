import { Button } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import  { AuthContext } from "../../Providers/AuthProvider";

const AddCraftItem = () => {
   const {user} = useContext(AuthContext);
console.log(user)

  const handleAddCraftItem = event => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const subcategoryName = form.subcategoryName.value;
    const shortDescription = form.shortDescription.value;
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value); 
    const customization = form.customization.value;
    const processingTime = parseFloat(form.processingTime.value);
    const stockStatus = form.stockStatus.value;
    const userEmail = user.email;
    const userName = form.userName.value;

    const newCraftItem = { image, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, userEmail, userName };
  //  console.log(newCraftItem);

    // send data to the server
    fetch('http://localhost:5000/addArtCraftItem', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCraftItem)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId.length > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Craft Item Added Successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          form.reset();
        }
      });
  };

  return (
    <section className="">
      <Helmet>
        <title>Art & Craft | Add Item</title>
      </Helmet>
      <h2 className="text-2xl font-extrabold text-center mb-5">Add a Craft Item</h2>
      <div className="bg-[#F4F3F0] p-10 rounded-lg shadow-lg mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">

          <form onSubmit={handleAddCraftItem} className="">
           <div className="grid grid-cols-1 gap-x-5 lg:grid-cols-2">
            {/* Form fields */}
            {/* Image URL */}
            <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">Image URL</span>
              </label>
              <input type="text" name="image" placeholder="Image URL" className="input rounded-lg border-gray-200 p-3 text-sm w-full" />
            </div>

            {/* Item Name */}
            <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">Item Name</span>
              </label>
              <input type="text" name="itemName" placeholder="Item Name" className="input rounded-lg border-gray-200 p-3 text-sm w-full" />
            </div>
            {/* Subcategory Name */}
            <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">Subcategory Name</span>
              </label>
              <input type="text" name="subcategoryName" placeholder="Subcategory Name" className="input rounded-lg border-gray-200 p-3 text-sm w-full" />
            </div>
          
            {/* Price */}
            <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">Price</span>
              </label>
              <input type="number" name="price" placeholder="Price" className="input rounded-lg border-gray-200 p-3 text-sm w-full" />
            </div>
            {/* Rating */}
            <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">Rating</span>
              </label>
              <input type="text" name="rating" placeholder="Rating" className="input rounded-lg border-gray-200 p-3 text-sm w-full" />
            </div>
            {/* Customization */}
            <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">Customization</span>
              </label>
              <select name="customization" className="select rounded-lg border-gray-200 p-3 text-sm w-full">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            {/* Processing Time */}
            <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">Processing Time</span>
              </label>
              <input type="text" name="processingTime" placeholder="Processing Time" className="input rounded-lg border-gray-200 p-3 text-sm w-full" />
            </div>
            {/* Stock Status */}
            <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">Stock Status</span>
              </label>
              <select name="stockStatus" className="select rounded-lg border-gray-200 p-3 text-sm w-full">
                <option value="">Select</option>
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>
              {/* Short Description */}
              <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">Short Description</span>
              </label>
              <textarea name="shortDescription" placeholder="Short Description" className="textarea  rounded-lg border-gray-200 p-3 text-sm w-full"></textarea>
            </div>
            {/* User Email */}
            {/* <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">User Email</span>
              </label>
              <input type="email" name="userEmail" placeholder="User Email" className="input rounded-lg border-gray-200 p-3 text-sm w-full" />
            </div> */}
            {/* User Name */}
            <div className="form-control mb-8">
              <label className="label">
                <span className="font-bold mb-3">User Name</span>
              </label>
              <input type="text" name="userName" placeholder="User Name" className="input rounded-lg border-gray-200 p-3 text-sm w-full" />
            </div>
            </div>
            {/* Submit Button */}
<div className="flex justify-end">
<Button type="submit" value="Add Craft Item" className="" >Add Craft Item</Button>
</div>
          </form>
  
      </div>
    </section>
  );
};

export default AddCraftItem;