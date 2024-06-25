import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useImageHost from "../../../Hooks/useImageHost";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import moment from "moment/moment";
import { Helmet } from "react-helmet";
import HeaderTitle from "../../../Components/HeaderTitle";

const PetUpdate = () => {
  const { register, handleSubmit, reset } = useForm();
  const { _id, name, image, category, age, location, note, description } =
    useLoaderData();
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

    const updatePet = {
      name: data.name ? data.name : name,
      category: data.category ? data.category : category,
      age: parseFloat(data.age) ? parseFloat(data.age) : age,
      location: data.location ? data.location : location,
      note: data.note ? data.note : note,
      description: data.description ? data.description : description,
      image: res?.data?.data?.display_url
        ? res?.data?.data?.display_url
        : image,
      adopted: false,
      date: moment().utc().toDate(),
    };

    const petRes = await axiosSecure.patch(`/pets/update/${_id}`, updatePet);
    console.log(petRes);
    if (petRes.data.modifiedCount > 0) {
      reset();
      toast.success(`${name} is Update successfully`);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Happy Homes | Dashboard</title>
      </Helmet>
      <div>
        <HeaderTitle title={"Pet Update"} />
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
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue={category}
              className="select select-bordered"
              {...register("category")}
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="rabbit">Rabbit</option>
              <option value="bird">Bird</option>
            </select>
          </div>
          <div className="flex-1 form-control w-full">
            <label className="label">
              <span className="label-text">Age*</span>
            </label>
            <input
              {...register("age")}
              type="number"
              defaultValue={age}
              placeholder="age"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex-1 form-control w-full">
            <label className="label">
              <span className="label-text">Pet Location*</span>
            </label>
            <input
              {...register("location")}
              type="text"
              defaultValue={location}
              placeholder="Pet pick up Location"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Short Description*</span>
          </label>
          <textarea
            {...register("note")}
            defaultValue={note}
            className="textarea textarea-bordered h-28"
            placeholder="Owner Note"
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
            Update Pet
          </button>
        </div>
      </form>
    </div>
  );
};

export default PetUpdate;
