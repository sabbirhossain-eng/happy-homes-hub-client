import About from "../About/About";
import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <CallToAction/>
            <About/>
        </div>
    );
};

export default Home;