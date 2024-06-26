import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useImageHost from "../../../Hooks/useImageHost";
import toast from "react-hot-toast";
import moment from "moment/moment";
import { Helmet } from "react-helmet";
import HeaderTitle from "../../../Components/HeaderTitle";
import useAuth from "../../../Hooks/useAuth";

const AddPet = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const imageHost = useImageHost();
  const [selectedCategory, setSelectedCategory] = useState("");
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
  try {
    const imageData = new FormData();
    imageData.append("image", image);

    const res = await axiosPublic.post(imageHost, imageData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const petItems = {
        name: values.name,
        category: selectedCategory,
        age: parseFloat(values.age),
        location: values.location,
        note: values.note,
        description: values.description,
        image: res.data.data.display_url,
        adopted: false,
        date: moment().utc().toDate(),
        email: user.email,
      };

      const petsRes = await axiosSecure.post("/pets", petItems);

      if (petsRes.data.insertedId) {
        resetForm();
        toast.success(`${petItems.name} is added as a pet`);
      } else {
        toast.error(58, "Failed to add the pet");
      }
    } else {
      toast.error(61, "Image upload failed");
    }
  } catch (error) {
    console.error("64, Error ", error);
    toast.error("An error occurred. Please try again later!");
  }
};

  return (
    <div>
      <Helmet>
        <title>Happy Homes | Dashboard</title>
      </Helmet>
      <div>
        <HeaderTitle title={"Add Pet"} />
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Name is Required";
          }
          
          if (!values.category) {
            errors.category = "Category is Required";
          }
          if (!values.age) {
            errors.age = "Age is Required";
          }
          if (!values.location) {
            errors.location = "Location is Required";
          }
          if (!values.note) {
            errors.note = "About the pet or small note is Required";
          }
          return errors;
        }}
      >
        {({ handleChange, values, }) => (
          <Form className="space-y-6">
            <div className="flex gap-6 items-center">
              <div className="form-control w-full flex-1">
                <label className="label">
                  <span className="label-text">Pet Name*</span>
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Pet Name"
                  className="input input-bordered w-full"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="form-control w-full flex-1">
                <label className="label">
                  <span className="label-text">Pet Image*</span>
                </label>
                <Field
                  type="file"
                  name="image"
                  onChange={(e) =>{
                    setImage(e.target.files[0])
                   
                  }}
                  className="file-input file-input-bordered file:bg-primary-light file:border-primary-light w-full text-black"
                />
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category*</span>
                </label>
                <Field
                  as="select"
                  name="category"
                  className="m-1 btn bg-white text-black hover:bg-yellow-50 font-normal"
                  value={values.category}
                  onChange={(e) => {
                    handleChange(e);
                    setSelectedCategory(e.target.value);
                  }}
                >
                  <option value="" disabled>
                    Select Your Category
                  </option>
                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                  <option value="rabbit">Rabbit</option>
                  <option value="bird">Bird</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Age*</span>
                </label>
                <Field
                  type="number"
                  name="age"
                  placeholder="Pet age"
                  className="input input-bordered w-full"
                />
                <ErrorMessage
                  name="age"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Pet Location*</span>
                </label>
                <Field
                  type="text"
                  name="location"
                  placeholder="Pet pick up Location"
                  className="input input-bordered w-full"
                />
                <ErrorMessage
                  name="location"
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
                name="note"
                className="textarea textarea-bordered h-24"
                placeholder=" About the pet or small note"
              />
              <ErrorMessage
                name="note"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <Field
                as="textarea"
                name="description"
                className="textarea textarea-bordered h-24"
                placeholder=" About the pet or small note"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn text-black bg-primary-light"
              >
                Add Pet
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPet;
