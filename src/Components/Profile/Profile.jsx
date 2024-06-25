import useAuth from "../../Hooks/useAuth";
import ProfileChart from "./ProfileChart";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
        <div className="w-96 px-6 py-6  text-center bg-green-100 rounded-lg lg:mt-0 xl:px-10 mx-auto">
      <div className="space-y-4 xl:space-y-6">
        <img
          className="mx-auto rounded-full h-36 w-36"
          src={
            user?.photoURL
              ? user?.photoURL
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGf_8UZ3xLijdkOtv3qWnUpyknARbKMrcVJA&usqp=CAU"
          }
          alt="author avatar"
        />
        <div className="space-y-2">
          <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
            <h3 className="text-black">{user.displayName}</h3>
            <p className="text-secondary-light">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
    {/* chart */}
    <ProfileChart/>
    </div>
  );
};

export default Profile;
