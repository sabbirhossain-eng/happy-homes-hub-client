import { Helmet } from "react-helmet";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin";
import toast from "react-hot-toast";
import useImageHost from "../../Hooks/useImageHost";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {register, handleSubmit, reset, formState: { errors },} = useForm();
  const { createUser, signUpUpdateProfile, logOut } = useAuth();
  const imageHost = useImageHost();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const imageFile = new FormData();
    imageFile.append ('image', data.image[0]) 

    const res = await axiosPublic.post(imageHost, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      createUser(data.email, data.password).then((result) => {
        const logger = result.user;
        console.log(logger);
        signUpUpdateProfile(data.name, data.photo)
          .then(() => {
            // create a user in the database add...
            const userInfo = {
              name: data.name,
              email: data.email,
              image: res.data.data.display_url,
              role: 'user'
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                reset();
                toast.success("Sign Up Successfully!");
                logOut();
                navigate("/login");
              }
            });
          })
          .catch((error) => {
            console.error(error);
            toast.error(error);
          });
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Happy Homes | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center md:w-1/2">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <div className="py-6">
              <img src="https://i.ibb.co/1Q1Mh8v/Sign-up-ds.png" alt="" />
            </div>
          </div>
          <div className="card flex-shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-base-200">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[52px] left-72 lg:left-[290px]"
                >
                  {showPassword ? <FaEyeSlash/> : <FaEye/>}
                </span>
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">
                    Password must be less then 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must have one upper case, one lower case, one
                    number and one special characters
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Photo</span>
                </label>
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input  file-input-bordered file-input-warning w-full max-w-xs"
                />
                 {errors.image && (
                  <span className="text-red-500">Image is required</span>
                )}
              </div>
              <div className="form-control mt-2">
                <input
                  className="btn bg-[#f6ab4a]"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p className="text-center">
                <SocialLogin />
                <small>
                  Already registered ?{" "}
                  <Link to="/login" className="text-[#f6ab4a]">
                    go to login
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
