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
      <Card className="w-full lg:w-[60%] mx-auto dark:bg-card-dark dark:text-in-dark">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography  className="font-semibold text-2xl text-primary-light">
              {name}
            </Typography>
            <Typography  className="font-medium">
              Age: {age} years
            </Typography>
            <Typography  className="font-medium capitalize">
              Category: {category}
            </Typography>
          </div>
          <div className="mt-2 mb-4 flex items-center justify-between">
            <Typography  className="font-medium">
              Location: {location}
            </Typography>
            <Typography  className="font-medium capitalize">
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
          <hr className="my-4 bg-primary-light p-[1px]" />
          <Typography
            
            className="font-semibold text-center text-3xl mb-2 text-primary-light"
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
            className="bg-primary-light text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
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
