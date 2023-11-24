import About from "../About/About";
import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";
import Category from "../Category/Category";
import PetsSwiper from "../PetSwiper/PetsSwiper";
import PetsGallery from "../PetsGallery/PetsGallery";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <CallToAction/>
            <PetsGallery/>
            <About/>
            <PetsSwiper/>
        </div>
    );
};

export default Home;