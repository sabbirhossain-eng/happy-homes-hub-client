import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    
    <div className=" flex flex-col lg:flex-row lg:justify-center gap-4 lg:-mt-28 mx-auto">
        {/* card-1 */}
      <div>
      <Link to="/cats">
      <Card className="group w-64 h-96 relative overflow-hidden shadow-lg transition-transform transform hover:scale-105 mx-auto">
        <CardHeader floated={false} className="h-80">
          <img
            src="https://i.ibb.co/MpCqxzX/cats.png"
            alt="profile-picture"
            className="object-cover transition-all group-hover:brightness-75"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Cats
          </Typography>
        </CardBody>
      </Card>
      </Link>
      </div>
        {/* card-2 */}
      <div>
      <Link to="/dogs">
      <Card className="group w-64 h-96 relative overflow-hidden shadow-lg transition-transform transform hover:scale-105 mx-auto">
        <CardHeader floated={false} className="h-80">
          <img
            src="https://i.ibb.co/WWcgPHs/dogs.png"
            alt="profile-picture"
            className=" object-cover transition-all group-hover:brightness-75"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Dogs
          </Typography>
        </CardBody>
      </Card>
      </Link>
      </div>
        {/* card-3 */}
      <div>
      <Link to="/rabbits">
      <Card className="group w-64 h-96 relative overflow-hidden shadow-lg transition-transform transform hover:scale-105 mx-auto">
        <CardHeader floated={false} className="h-80">
          <img
            src="https://i.ibb.co/SXFZp0H/rabbit.png"
            alt="profile-picture"
            className=" object-cover transition-all group-hover:brightness-75"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Rabbits
          </Typography>
        </CardBody>
      </Card>
      </Link>
      </div>
        {/* card-4 */}
      <div>
      <Link to="/birds">
      <Card className="group w-64 h-96 relative overflow-hidden shadow-lg transition-transform transform hover:scale-105 mx-auto">
        <CardHeader floated={false} className="h-80">
          <img
            src="https://i.ibb.co/gwn9Shk/birds.png"
            alt="profile-picture"
            className="object-cover transition-all group-hover:brightness-75"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Birds
          </Typography>
        </CardBody>
      </Card>
      </Link>
      </div>
    </div>
  );
};

export default Category;
