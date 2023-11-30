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
import DonationModal from "./DonationModal";

const DonationCampDetails = () => {
  const {
    image,
    name,
    lastDate,
    amount,
    short_description,
    description,
    date,
  } = useLoaderData();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const splitDate = (dateString) => {
    const [dateValue] = dateString.split("T");
    return dateValue;
  };

  return (
    <div>
      <Card className=" w-full overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            {name}
          </Typography>
          <div className="flex justify-between">
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal"
            >
              Last date: {lastDate}
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal"
            >
              Post date: {splitDate(date)}
            </Typography>
          </div>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            Donation maximum amount : ${amount}
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="mt-3 font-normal opacity-75"
          >
            <span className="text-lg text-black">Summary:</span>{" "}
            {short_description}
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
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center -space-x-3">
            <Button
              onClick={handleOpen}
              ripple={false}
              fullWidth={true}
              className="bg-[#f6ab4a] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Donation Now !
            </Button>
          </div>
          <DonationModal handleOpen={handleOpen} open={open}/>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DonationCampDetails;
