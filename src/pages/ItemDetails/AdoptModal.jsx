import {
  Dialog,
  Input,
  Card,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import useAuth from "../../Hooks/useAuth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdoptModal = ({ handleOpen, open }) => {
  const { user } = useAuth();
  const [phone, setPhone] = useState("");
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const number = phone;
    const address = formData.get("address");
    const adoption = true;
    const adoptPet = { name, email, number, address,adoption };
    console.log(name, email, number, address);

    const res = await axiosSecure.post('/adoptPets', adoptPet)
    if(res.data.insertedId){
        toast.success("Adopt Successfully!");
        navigate('/petListing');
    }
  };

  return (
    <div>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <form onSubmit={handleSubmit}>
          <Card className="mx-auto w-auto">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                {user?.displayName} fill the form !
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Enter your Phone number and Address to Adopt Pet.
              </Typography>
              <Typography className="-mb-2" variant="h6">
                User Name
              </Typography>
              <Input
                name="name"
                type="text"
                readOnly
                label="User Name"
                value={user?.displayName}
                size="lg"
              />
              <Typography className="-mb-2" variant="h6">
                Your Email
              </Typography>
              <Input
                name="email"
                readOnly
                type="email"
                label="Email"
                value={user?.email}
                size="lg"
              />
              <Typography className="-mb-2" variant="h6">
                Phone Number
              </Typography>
              <PhoneInput
                inputStyle={{ width: "100%", height: "40px" }}
                country={"bd"}
                required
                enableSearch={true}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
              <Typography className="-mb-2" variant="h6">
                Address
              </Typography>
              <Input
                name="address"
                required
                type="text"
                label="Address"
                size="lg"
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                type="submit"
                className=" btn bg-primary-light text-black"
                fullWidth
              >
                Adopt Confirm
              </Button>
              <Typography variant="small" className="mt-4 flex justify-center">
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="red"
                  className="ml-1 font-bold"
                  onClick={handleOpen}
                >
                  Cancel
                </Typography>
              </Typography>
            </CardFooter>
          </Card>
        </form>
      </Dialog>
    </div>
  );
};

export default AdoptModal;
