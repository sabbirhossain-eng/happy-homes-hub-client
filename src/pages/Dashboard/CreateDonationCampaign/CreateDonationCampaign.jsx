import { ErrorMessage, Field, Form, Formik } from "formik";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useImageHost from "../../../Hooks/useImageHost";
import { useState } from "react";
import moment from "moment";
import toast from "react-hot-toast";
import HeaderTitle from "../../../Components/HeaderTitle";
import { Helmet } from "react-helmet";
import useAuth from "../../../Hooks/useAuth";

const CreateDonationCampaign = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const [lastDate, setLastDate] = useState("");
  const imageHost = useImageHost();
  const [image, setImage] = useState(null);
  const initialValues = {
    name: "",
    image: null,
    category: "",
    age: "",
    location: "",
    note: "",
    description: "",
  };
  console.log(image);
  const onSubmit = async (values, { resetForm }) => {
    console.log(values);
    const imageData = new FormData();
    imageData.append("image", image);
    console.log(imageData);
    const res = await axiosPublic.post(imageHost, imageData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    console.log(res);
    if (res && res.data.success) {
      const createItems = {
        image: res.data.data.display_url,
        lastDate: lastDate,
        short_description: values.shortDescription,
        description: values.longDescription,
        donation: true,
        date: moment().utc().toDate(),
        email: user.email,
      };
      console.log(createItems)

      const createRes = await axiosSecure.post("/createDonation", createItems);
      console.log(createRes);
      if (createRes.data.insertedId) {
        resetForm();
        toast.success('Donation campaign is created successfully');
      }
    }
  };
  return (
    <div>
      <Helmet>
        <title>Happy Homes | Dashboard</title>
      </Helmet>
      <div>
        <HeaderTitle title={"Create Donation Campaign"} />
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={(values) => {
            const errors = {};
            if (values.amount && parseFloat(values.amount) > 50) {
                errors.amount = "Maximum donation amount must be $50 or less";
              }
      
            if (!values.LastDate) {
              errors.LastDate = "Date is Required";
            }
            if (!values.shortDescription) {
              errors.shortDescription = "Short Description is Required";
            }
            if (!values.longDescription) {
              errors.longDescription = "Long Description is Required";
            }
            return errors;
          }}
        >
          
            {({ handleChange, values, }) =>(<Form className="space-y-6">
              <div className="flex gap-6 items-center">
              <div className="form-control w-full flex-1">
                  <label className="label">
                    <span className="label-text">Pet Image*</span>
                  </label>
                  <Field
                    type="file"
                    name="image"
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                    className="file-input file-input-bordered file-input-warning w-full"
                  />
                  <ErrorMessage
                    name="image"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="form-control w-full flex-1">
                  <label className="label">
                    <span className="label-text">Donation Amount*</span>
                  </label>
                  <Field
                    type="number"
                    name="amount"
                    placeholder="Maximum donation amount $50"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage
                    name="amount"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                
              </div>
              <div className="flex items-center gap-6">
                
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Date*</span>
                  </label>
                  <Field
                    type="date"
                    name="LastDate"
                    className="input input-bordered w-full"
                    value={values.LastDate}
                    onChange={(e) => {
                      handleChange(e);
                      setLastDate(e.target.value);
                    }}
                  />
                  <ErrorMessage
                    name="LastDate"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Short Description*</span>
                </label>
                <Field
                  as="textarea"
                  name="shortDescription"
                  className="textarea textarea-bordered h-24"
                  placeholder=" About the pet or small note"
                />
                <ErrorMessage
                  name="shortDescription"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Long Description</span>
                </label>
                <Field
                  as="textarea"
                  name="longDescription"
                  className="textarea textarea-bordered h-24"
                  placeholder=" About the pet or small note"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn flex text-white bg-[#f6ab4a]"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateDonationCampaign;
