import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";
import { FaGithub } from "react-icons/fa";


const SocialLogin = () => {
  const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res =>{
            console.log(res.data)
            const userInfo ={
                email: res.user?.email,
                name: res.user?.displayName
            }

            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data)
                navigate(from, { replace: true });
            })
        })
    };

    const handleGithubSignIn = () =>{

      
    }
    return (
      <div>
      <div className="flex flex-col justify-center">
        <Button
          size="lg"
          variant="outlined"
          className="flex justify-center items-center gap-3 p-2 rounded-lg capitalize text-[#4e2c2c]"
          onClick={handleGoogleSignIn}
        >
          <img
            src="https://docs.material-tailwind.com/icons/google.svg"
            alt="metamask"
            className="h-6 w-6"
          />
          Continue with Google
        </Button>
      </div>
      <div className="flex flex-col justify-center mt-2">
        <Button
          size="lg"
          variant="outlined"
          className="flex justify-center items-center gap-3 p-2 rounded-lg capitalize text-[#4e2c2c]"
          onClick={handleGithubSignIn}
        >
          <FaGithub
            className="h-6 w-6"
          />
          Continue with GitHub
        </Button>
      </div>
      <div className="divider"></div>
    </div>
    );
};

export default SocialLogin;