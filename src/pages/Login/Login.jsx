
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import login from "../../assets/LoginSignUp/Login.png";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
  
    const from = location.state?.from?.pathname || "/";
  
   
  
    const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
  
      signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Successfully!")
        navigate(from, { replace: true });
      })
      .catch(error =>{
        toast.error(error.message);
      })
    };
  
  return (
    <div>
              <Helmet>
        <title>Happy Homes | Login</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center md:w-1/2">
            <h1 className="text-5xl font-bold">Login</h1>
            <div className="py-6">
             <img src={login} alt="login" />
            </div>
          </div>
          <div className="card flex-shrink-0 w-full md:w-1/2 max-w-sm shadow-xl bg-green-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[52px] left-72 lg:left-[290px]"
                >
                  {showPassword ? <FaEyeSlash/> : <FaEye/>}
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  
                  className="btn bg-primary-light"
                  type="submit"
                  value="Sign In"
                />
              </div>
              <p className="text-center">
                <SocialLogin/>
                <small>
                  New here?{" "}
                  <Link to="/signUp" className="text-primary-light">
                    Create a New Account
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

export default Login;
