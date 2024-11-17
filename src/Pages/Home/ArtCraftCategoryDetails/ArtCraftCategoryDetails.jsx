import { Link, useLoaderData } from 'react-router-dom';

const ArtCraftCategoryDetails = () => {
  // Fetch data from the loader
  const subcategoryData = useLoaderData();
  console.log(subcategoryData);

  if (!subcategoryData) {
    return <div>Loading...</div>;
  }

  const { subcategoryName, image, examples } = subcategoryData;

  return (
    <div className="p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{subcategoryName}</h1>
        <img
          src={image}
          alt={subcategoryName}
          className="w-full max-w-lg mx-auto my-4 rounded-lg shadow-lg"
        />
      </div>

      <h2 className="text-2xl font-semibold my-6">Examples</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(examples) && examples.length > 0 ? (
          examples.map((example) => (
            <div
              key={example._id}
              className="p-4 border rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={example.image}
                alt={example.itemName}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold mt-2">{example.itemName}</h3>
              <p className="text-gray-700">{example.shortDescription}</p>
              <p className="mt-2 text-green-600 font-bold">${example.price}</p>
              <p className="text-sm text-gray-500">
                Rating: {example.rating} ⭐
              </p>
              <div className='flex  justify-end '>
            <Link to= {`/artCraftDetails/${example._id}`}>
              <button className='text-sm bg-[#23BE0A] p-2 text-white rounded-md'>View Details</button>
            </Link>
            </div>    
            </div>
          ))
        ) : (
          <p>No examples found for this subcategory.</p>
        )}
      </div>
    </div>
  );
};

export default ArtCraftCategoryDetails;
