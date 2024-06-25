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
      <Card className="mt-6 w-96 dark:bg-card-dark dark:text-in-dark" data-aos="fade-up" data-aos-duration="2000">
        <CardHeader className="relative h-56">
          <img src={item.image} className="w-full h-full" alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" className="mb-2 text-primary-light">
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
            <Button className="text-black transition transform hover:scale-110 bg-primary-light">View Details</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DonationCampaignCard;
