import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Category = () => {
  return (
    
    <div className="flex justify-center gap-4 -mt-28">
        {/* card-1 */}
      <div>
      <Card className="group w-64 h-96 relative overflow-hidden shadow-lg transition-transform transform hover:scale-105">
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
      </div>
        {/* card-2 */}
      <div>
      <Card className="group w-64 h-96 relative overflow-hidden shadow-lg transition-transform transform hover:scale-105">
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
      </div>
        {/* card-3 */}
      <div>
      <Card className="group w-64 h-96 relative overflow-hidden shadow-lg transition-transform transform hover:scale-105">
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
      </div>
        {/* card-4 */}
      <div>
      <Card className="group w-64 h-96 relative overflow-hidden shadow-lg transition-transform transform hover:scale-105">
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
      </div>
    </div>
  );
};

export default Category;
