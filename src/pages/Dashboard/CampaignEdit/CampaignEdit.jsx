import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import HeaderTitle from "../../../Components/HeaderTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useImageHost from "../../../Hooks/useImageHost";
import moment from "moment";
import toast from "react-hot-toast";

const CampaignEdit = () => {
  const {_id, image, name, lastDate , amount, short_description, description} = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const imageHost = useImageHost();

  const onSubmit = async (data) => {
    console.log(data);
    let res;
    const imageFile = { image: data.image[0] };
    if (imageFile.image) {
      res = await axiosPublic.post(imageHost, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
    }

    if (data.amount && parseFloat(data.amount) > 50) {
        return  toast.error("Maximum donation amount must be $50 or less");
      }

    const editItems = {
        image: res?.data?.data?.display_url
        ? res?.data?.data?.display_url
        : image,
      name: data.name ? data.name : name,
      lastDate: data.lastDate ? data.lastDate : lastDate,
      amount: parseFloat(data.amount) ? parseFloat(data.amount) : amount,
      short_description: data.short_description ? data.short_description : short_description,
      description: data.description ? data.description : description,
      donation: true,
      date: moment().utc().toDate(),
    };

    const petRes = await axiosSecure.patch(`/donations/edit/${_id}`, editItems);
    console.log(petRes);
    if (petRes.data.modifiedCount > 0) {
      reset();
      toast.success(`${name} is Edit successfully`);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Happy Homes | Dashboard</title>
      </Helmet>
      <div>
        <HeaderTitle title={"Your Donation Campaigns Edit"} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex items-center gap-6">
          <div className="flex-1 form-control w-full">
            <label className="label">
              <span className="label-text">Pet Name*</span>
            </label>
            <input
              {...register("name")}
              defaultValue={name}
              type="text"
              placeholder="Pet Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex-1 form-control w-full">
            <label className="label">
              <span className="label-text">Pet Image*</span>
            </label>
            <input
              {...register("image")}
              type="file"
              className="file-input file-input-bordered transition transform hover:scale-110 w-full"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex-1 form-control w-full">
            <label className="label">
              <span className="label-text">Donation Last Date*</span>
            </label>
            <input
            defaultValue={lastDate}
              {...register("lastDate")}
              type="date"
              placeholder="Last Date"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex-1 form-control w-full">
            <label className="label">
              <span className="label-text">Donation Amount*</span>
            </label>
            <input
              {...register("amount")}
              type="number"
              defaultValue={amount}
              placeholder="amount"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Short Description*</span>
          </label>
          <textarea
            {...register("short_description")}
            defaultValue={short_description}
            className="textarea textarea-bordered h-28"
            placeholder="short description"
          ></textarea>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description")}
            defaultValue={description}
            className="textarea textarea-bordered h-48"
            placeholder="Description"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button className="btn flex  text-black bg-primary-light">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CampaignEdit;
