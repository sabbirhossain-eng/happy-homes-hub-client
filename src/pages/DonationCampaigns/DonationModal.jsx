import {
  Dialog,
  Input,
  Card,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import moment from "moment";
import Swal from "sweetalert2";
import './styles.css';

const DonationModal = ({ handleOpen, open, user, amount, name, image }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const [phone, setPhone] = useState("");
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  // const [processing, setProcessing] = useState(false);

  useEffect(() => {
    async function fetchPaymentIntent() {
      if (amount > 0) {
        await axiosSecure.post("/create-payment-intent", { totalAmount: amount })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
      }
    }

    fetchPaymentIntent();
  }, [axiosSecure, amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();

   
  
    if (!stripe || !elements) {
      return;
    }
  
    const card = elements.getElement(CardElement);
  
    if (card === null) {
      return;
    }
  
    try {
      const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });
  
      if (paymentMethodError) {
        console.error("Payment method error:", paymentMethodError);
        setError(paymentMethodError.message);
        return;
      }
  
      console.log("Payment method", paymentMethod);
      setError("");
  
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || "anonymous",
              name: user?.displayName || "anonymous",
            },
          },
        }
      );
  
      if (confirmError) {
        console.error("Confirm error:", confirmError);
      } else {
        console.log("Payment intent", paymentIntent);
  
        if (paymentIntent.status === "succeeded") {
          console.log("Transaction ID", paymentIntent.id);
          Swal.fire({
            title: "Are you sure?",
            text: `You won't be able to $ ${amount} donate!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            customClass: {
              container: "custom-swal-container",
            },
          }).then ( async(result) => {
            if (result.isConfirmed) {
              setTransactionId(paymentIntent.id);
  
              const payment = {
                transactionId: paymentIntent.id,
                email: user.email,
                amount: amount,
                image: image,
                name: name,
                phone: phone,
                date: moment().utc().toDate(),
              };
      
              console.log("Payment data", payment);
    
      
              const res = await axiosSecure.post("/paymentDonations", payment);
      
              console.log("Payment saved in the database", res);
      
              if (res?.data?.insertedId) {
                navigate("/donationCampaigns");
                toast.success(`${user.email} Donate successfully`);
              }
            }
          });
  
        }
      }
    } catch (error) {
      console.error("Error during payment confirmation:", error);
    }
  };
  
  
  return (
    <div>
      
       <Dialog size="xs" open={open} handler={handleOpen} className="bg-transparent shadow-none">
      <form onSubmit={handleSubmit}>
        <Card className="mx-auto w-auto">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              {user?.displayName} fill the form!
            </Typography>
            <Typography className="mb-3 font-normal" variant="paragraph" color="gray">
              Enter your Phone number and Stripe card details.
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
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="submit"
              className=" btn bg-[#f6ab4a] text-white"
             
              
            >
              Submit
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
        <p className="text-red-500 text-center">{error}</p>
        {transactionId && <p className="text-green-500 text-center">Your transaction id: {transactionId} </p>}
      </form>
    </Dialog>
    </div>
  );
};

export default DonationModal;