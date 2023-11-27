import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ItemCard = ({item}) => {
  return (
    <div>
      <Card className="w-80">
        <CardHeader floated={false} className="h-56">
          <img
            src={item.image}
            alt="profile-picture"
            className="w-full h-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {item.name}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Age: {item.age} years
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Link to={`/details/${item._id}`}>
          <Button className="btn bg-[#f6ab4a]">
            Details
          </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemCard;
