import { useLoaderData } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import AdoptModal from "./AdoptModal";

const ItemDetails = () => {
  const { name, image, age, category, description, note, location, date } =
    useLoaderData();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const splitDate = (dateString) => {
    const [dateValue] = dateString.split("T");
    return dateValue;
  };

  return (
    <div>
      <Card className="w-auto">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-semibold">
              {name}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              Age: {age} years
            </Typography>
            <Typography color="blue-gray" className="font-medium capitalize">
              Category: {category}
            </Typography>
          </div>
          <div className="mt-2 mb-4 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              Location: {location}
            </Typography>
            <Typography color="blue-gray" className="font-medium capitalize">
              Date: {splitDate(date)}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            Owner Note: {note}
          </Typography>
          <hr className="my-4 bg-[#f6ab4a] p-[1px]" />
          <Typography
            color="blue-gray"
            className="font-semibold text-center text-3xl mb-2"
          >
            {name} Details
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            onClick={handleOpen}
            ripple={false}
            fullWidth={true}
            className="bg-[#f6ab4a] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Adopt Now !
          </Button>
          <AdoptModal handleOpen={handleOpen} open={open}/>
        </CardFooter>
      </Card>
      
    </div>
  );
};

export default ItemDetails;
