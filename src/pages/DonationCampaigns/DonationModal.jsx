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
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import { useElements, CardElement,  useStripe } from "@stripe/react-stripe-js";
import moment from "moment/moment";

const DonationModal = ({ handleOpen, open, amount, donationAmount, id }) => {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    async function cardFromData() {
      if (amount > 0) {
        await axiosSecure.post("/paymentIntent", { money: amount })
          .then((res) => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
          });
      }
    }

    cardFromData();
  }, [axiosSecure, amount]);
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      phone,
    };
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        //  now save the payment in the database
        const payment = {
          name: formData.get("name"),
          email: formData.get("email"),
          number: phone,
          address: formData.get("address"),
          transactionId: paymentIntent.id,
          date: moment().utc().toDate(),
        };

        const res = await axiosSecure.post("/paymentDonations", payment);

        console.log("payment save in the data base", res);
        if (res?.data?.paymentResult?.insertedId) {
          const addAmount = donationAmount + amount;
          await axiosSecure.patch(`/donation_amount_add/${id}`, addAmount)
          navigate("/donationCampaigns");

          toast.success(`${user.email} Payment successfully`);
        }
      }
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
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                Payment
              </Typography>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
              <Typography
                className="-mb-2 text-red-500 text-center"
                variant="paragraph"
              >
                {error}
              </Typography>
              {transactionId && (
                <Typography
                  variant="paragraph"
                  className="text-green-500 text-center"
                >
                  Your transaction id: {transactionId}{" "}
                </Typography>
              )}
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                type="submit"
                className=" btn bg-[#f6ab4a] text-white"
                fullWidth
                disabled={!stripe || !clientSecret}
              >
                Payment Confirm
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

export default DonationModal;
