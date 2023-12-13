import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const DonationCampaignCard = ({ item }) => {
  return (
    <div>
      <Card className="mt-6 w-96" data-aos="fade-up" data-aos-duration="3000">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={item.image} className="w-full h-full" alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {item.name}
          </Typography>
          <Typography>
            <p>Maximum Donation Amount: $ {item.amount}</p>
          </Typography>
          <Typography>
            <p>
              Donation Amount: $ {item.donationAmount ? item.donationAmount : "0"}
            </p>
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to={`/donationDetails/${item._id}`}>
            <Button className="btn btn-md bg-[#f6ab4a]">View Details</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DonationCampaignCard;
