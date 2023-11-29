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
import PetListing from "../pages/PetListing/PetListing";
import ItemDetails from "../pages/ItemDetails/Itemdetails";
import PrivetRoute from "./PrivetRoute";
import ErrorElements from "../pages/ErrorPage/ErrorElement";
import PetUpdate from "../pages/Dashboard/PetUpate/PetUpdate";
import CampaignEdit from "../pages/Dashboard/CampaignEdit/CampaignEdit";
import DonationCampaigns from "../pages/DonationCampaigns/DonationCampaigns";
import DonationCampDetails from "../pages/DonationCampaigns/DonationCampDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorElements/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/petListing",
        element: <PetListing />,
      },
      {
        path: "/details/:id",
        element: <PrivetRoute>
          <ItemDetails />
        </PrivetRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/pets/${params.id}`),
      },
      {
        path: '/donationCampaigns',
        element:<DonationCampaigns/>
      },
      {
        path: "/donationDetails/:id",
        element: <PrivetRoute>
          <DonationCampDetails/>
        </PrivetRoute>,
        loader: ({ params }) =>
        fetch(`http://localhost:5000/donations/${params.id}`),
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
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <Dashboard />
      </PrivetRoute>
    ),
    children: [
      // user dashboard
      {
        path: "addPet",
        element: <AddPet />,
      },
      {
        path: "myAddedPets",
        element: <MyAddedPets />,
      },
      {
        path:"petUpdate/:id",
        element: <PetUpdate/>,
        loader: ({params}) => fetch(`http://localhost:5000/pets/${params.id}`)
      },
      {
        path: "adoptionReq",
        element: <AdoptionRequest />,
      },
      {
        path: "createDonation",
        element: <CreateDonationCampaign />,
      },
      {
        path: "MyDonationCampaign",
        element: <MyDonationCampaigns />,
      },
      {
        path: 'campaignEdit/:id',
        element: <CampaignEdit/>,
        loader: ({params}) => fetch(`http://localhost:5000/donations/${params.id}`)
      },
      {
        path: "myDonations",
        element: <MyDonations />,
      },
    ],
  },
]);
