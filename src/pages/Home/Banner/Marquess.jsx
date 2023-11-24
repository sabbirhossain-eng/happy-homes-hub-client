import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Marquess = () => {
  return (
    <div className="flex">
        <p className=" w-20 capitalize">Pet Adoption</p>
        <Marquee pauseOnHover={true} speed={80}>
          <Link className="mr-12" to="/">
            Cat
          </Link>
          <Link className="mr-12" to="/">
            Docs
          </Link>
          <Link className="mr-12" to="/">
            Rabbits
          </Link>
          <Link className="mr-12" to="/">
            Birds
          </Link>
        </Marquee>
      </div>
  );
};

export default Marquess;
