import { Link } from "react-router-dom";

import cat from "../../../assets/Category/Cats.png";
import bird from "../../../assets/Category/Birds.png";
import rabbit from "../../../assets/Category/Rabbits.png";
import dog from "../../../assets/Category/Dogs.png";

const Category = () => {
  return (
    <div className=" flex flex-col  lg:flex-row lg:justify-center gap-4 mx-auto my-10">
      {/* card-1 */}
      <div>
        <Link to="/cats">
          <div
            className="card bg-white shadow-lg py-10 px-5 items-center hover:bg-primary-light dark:hover:hover:bg-primary-light text-gray-800 hover:text-white dark:text-in-dark dark:bg-card-dark"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img className="w-40" src={cat} alt="cats" />
            <p className="text-xl font-bold mt-4">Cats</p>
          </div>
        </Link>
      </div>
      {/* card-2 */}
      <div>
        <Link to="/dogs">
          <div
            className="card bg-white shadow-lg py-10 px-5 items-center hover:bg-primary-light dark:hover:hover:bg-primary-light text-gray-800 hover:text-white dark:text-in-dark dark:bg-card-dark "
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img className="w-40" src={bird} alt="birds" />
            <p className="text-xl font-bold mt-4">Birds</p>
          </div>
        </Link>
      </div>
      {/* card-3 */}
      <div>
        <Link to="/rabbits">
          <div
            className="card bg-white shadow-lg py-10 px-5 items-center hover:bg-primary-light dark:hover:hover:bg-primary-light text-gray-800 hover:text-white dark:text-in-dark dark:bg-card-dark"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img className="w-40" src={rabbit} alt="rabbits" />
            <p className="text-xl font-bold mt-4">Rabbits</p>
          </div>
        </Link>
      </div>
      {/* card-4 */}
      <div>
        <Link to="/birds">
          <div
            className="card bg-white shadow-lg py-10 px-5 items-center hover:bg-primary-light dark:hover:hover:bg-primary-light text-gray-800 hover:text-white dark:text-in-dark dark:bg-card-dark"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img className="w-40" src={dog} alt="dogs" />
            <p className="text-xl font-bold mt-4">Dogs</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
