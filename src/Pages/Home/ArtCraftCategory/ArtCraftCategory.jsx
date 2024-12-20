import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ArtCraftCategory = () => {
  const [artCategory, setArtCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://b9a10-server-side-ahad30.vercel.app/artCraftSubcategory')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setArtCategory(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="">
      <div className="mb-5">
        <h1 className="text-center text-3xl font-bold mt-8 mb-5">
          Art & Craft Category
        </h1>

        {loading ? (
          <p className="text-center text-blue-500 font-bold">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-400 font-bold">{error}</p>
        ) : artCategory.length === 0 ? (
          <p className="text-center text-red-400 font-bold">No data found.</p>
        ) : (
          <div
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            className="w-[98%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {artCategory.map((item) => (
              <div key={item?._id} className="">
                <Link to={`/artCraftSubcategories/${item?.subcategoryName}`}>
                  <div className="overflow-hidden rounded-3xl shadow transition hover:shadow-lg">
                    <div className="">
                      <img
                        alt={item?.subcategoryName || 'Art Category'}
                        src={item?.image}
                        className="w-[400px] h-[314px] p-10 animate__animated animate__heartBeat"
                      />
                    </div>
                    <div className="bg-white space-y-3 p-4 sm:p-6">
                      <div className="flex items-center justify-center gap-4 text-[#878787] mb-3">
                        <p className="text-sm font-bold">
                          {item?.subcategoryName}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtCraftCategory;
