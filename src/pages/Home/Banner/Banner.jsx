import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/Banner_cover/image.jpg';
import img2 from '../../../assets/Banner_cover/image1.png';
import img3 from '../../../assets/Banner_cover/image3.jpg';
import img4 from '../../../assets/Banner_cover/image4.jpg';
import Marquess from "./Marquess";
import './style.css'
const Banner = () => {
    return (
        <Carousel className="w-full text-center">
                <div>
                    <img src={img1} />
                    <div className="legend text-white"><Marquess/></div>
                </div>
                <div>
                    <img src={img2} />
                    <div className="legend text-white"><Marquess/></div>
                </div>
                <div>
                    <img src={img3} />
                    <div className="legend text-white"><Marquess/></div>
                </div>
                <div>
                    <img src={img4} />
                    <div className="legend text-white"><Marquess/></div>
                </div>
            </Carousel>
    );
};

export default Banner;