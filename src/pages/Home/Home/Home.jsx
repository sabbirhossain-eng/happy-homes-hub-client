import { Helmet } from "react-helmet";
import About from "../About/About";
import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";
import Category from "../Category/Category";
import CountUpStat from "../CountUp/CountUpStat";
import ContactUs from "../../ContactUs/ContactUs";

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
      <div id="aboutUs">
      <About />
      </div>
      <div id="contactUs">
      <ContactUs/>
      </div>
    </div>
  );
};

export default Home;
