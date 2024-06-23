import { Helmet } from "react-helmet";
import About from "../About/About";
import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";
import Category from "../Category/Category";
import PetsSwiper from "../PetSwiper/PetsSwiper";
import CountUpStat from "../CountUp/CountUpStat";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Happy Homes | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <CountUpStat/>
      <CallToAction />
      <About />
      <PetsSwiper />
    </div>
  );
};

export default Home;
