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
import useAuth from "../../Hooks/useAuth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

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
  const {user} = useAuth();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const splitDate = (dateString) => {
    const [dateValue] = dateString.split("T");
    return dateValue;
  };

  return (
    <div>
      <Elements stripe={stripePromise}>
      <Card className=" w-full overflow-hidden dark:bg-card-dark dark:text-in-dark">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" className="text-primary-light" >
            {name}
          </Typography>
          <div className="flex justify-between">
            <Typography
              variant="lead"
              
              className="mt-3 font-normal"
            >
              Last date: {lastDate}
            </Typography>
            <Typography
              variant="lead"
              
              className="mt-3 font-normal"
            >
              Post date: {splitDate(date)}
            </Typography>
          </div>
          <Typography variant="lead"  className="mt-3 font-normal">
            Donation maximum amount : ${amount}
          </Typography>
          <Typography
            variant="small"
            
            className="mt-3 font-normal opacity-75"
          >
            <span className="text-lg text-black">Summary:</span>{" "}
            {short_description}
          </Typography>
          <hr className="my-4 bg-primary-light p-[1px]" />
          <Typography
            
            className="font-semibold text-center text-3xl mb-2 text-primary-light"
          >
            {name} Details
          </Typography>
          <Typography
            variant="small"
            
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
              className="bg-primary-light text-black shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Donation Now !
            </Button>
          </div>
        </CardFooter>
          <DonationModal handleOpen={handleOpen} open={open} user={user} amount={amount} image={image} name={name}/>
      </Card>
      </Elements>
    </div>
  );
};

export default DonationCampDetails;
