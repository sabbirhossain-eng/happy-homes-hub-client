import { Parallax } from "react-parallax";
import img from '../../../assets/Banner/image2.jpg'

const Banner = () => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the Cat"
        strength={-200}
      >
        <div
          className="hero max-w-screen-2xl h-[500px] border-[#f6ab4a] border-t-8 border-b-8 "
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold uppercase">Happy Home Hub</h1>
              <p className="mb-5">
              Pet adoption is the compassionate act of providing a home and care for an animal in need.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    );
};

export default Banner;