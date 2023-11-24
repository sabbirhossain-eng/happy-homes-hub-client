import { Parallax } from "react-parallax";
import img from "../../../assets/About/image3.jpg";
const About = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-semibold text-[#f6ab4a] text-center mb-4">
        Welcome to Happy Homes Hub - Where Hearts and Homes Unite!
      </h2>
      <div>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={img}
          bgImageAlt="The Rabbit"
          strength={-200}
        >
          <div className="hero h-[800px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content py-20">
              <div className="max-w-3xl space-y-4">
                <p className="mb-5 ">
                  Happy Homes Hub is a cutting-edge pet adoption platform
                  designed with a singular mission: to create joyous connections
                  between pets and their forever families. Our platform is
                  dedicated to revolutionizing the adoption process, making it
                  an enriching and seamless experience for both adopters and
                  pets.
                </p>
                <h3>Why Happy Homes Hub:</h3>

                <p>
                  <strong>Passion for Pet Welfare:</strong>
                  We are driven by a deep passion for animal welfare. Our
                  platform was born from the desire to make a positive impact on
                  the lives of both pets and adopters.
                </p>

                <p>
                  <strong>Innovation for Impact:</strong>
                  Happy Homes Hub leverages technology to bring innovation to
                  pet adoption. We believe that by embracing technology, we can
                  enhance the adoption experience and increase the number of
                  happy homes for pets in need.
                </p>

                <p>
                  <strong>Community Building:</strong>
                  Beyond being a platform, Happy Homes Hub is a community. Join
                  a network of like-minded individuals who share a love for
                  animals. Connect, share stories, and be a part of a community
                  dedicated to creating happy homes.
                </p>

                <p>
                  Embark on your adoption journey with Happy Homes Hub, where
                  the perfect companionship is just a click away. Together,
                  lets make every home a happy home!
                </p>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default About;
