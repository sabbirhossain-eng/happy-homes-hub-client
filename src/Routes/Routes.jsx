import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import AddPet from "../pages/Dashboard/AddPet/AddPet";
import MyAddedPets from "../pages/Dashboard/MyAddedPets/MyAddedPets";
import AdoptionRequest from "../pages/Dashboard/AdoptionRequest/AdoptionRequest";
import CreateDonationCampaign from "../pages/Dashboard/CreateDonationCampaign/CreateDonationCampaign";
import MyDonationCampaigns from "../pages/Dashboard/MyDonationCampaigns/MyDonationCampaigns";
import MyDonations from "../pages/Dashboard/MyDonations/MyDonations";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      // user dashboard
      {
        path: 'addPet',
        element: <AddPet />,
      },
      {
        path: 'myAddedPets',
        element: <MyAddedPets/>
      },
      {
        path: 'adoptionReq',
        element: <AdoptionRequest/>
      },
      {
        path: 'createDonation',
        element: <CreateDonationCampaign/>
      },
      {
        path: 'MyDonationCampaign',
        element: <MyDonationCampaigns/>
      },{
        path: 'myDonations',
        element: <MyDonations/>
      }
    ],
  },
]);
