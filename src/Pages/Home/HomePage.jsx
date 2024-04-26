import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Properties from "./Property/Properties";
import Contact from "../Contact/Contact";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
     <Helmet>
      <title>Arts & Craft | Home </title>
    </Helmet>
     <Banner/>
     <Properties/>
     <Contact></Contact>
    </div>
  );
};

export default HomePage;
