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
import PrivetRoute from "./PrivetRoute";
import ErrorElements from "../pages/ErrorPage/ErrorElement";
import PetUpdate from "../pages/Dashboard/PetUpate/PetUpdate";
import CampaignEdit from "../pages/Dashboard/CampaignEdit/CampaignEdit";
import DonationCampaigns from "../pages/DonationCampaigns/DonationCampaigns";
import DonationCampDetails from "../pages/DonationCampaigns/DonationCampDetails";
import Users from "../pages/Dashboard/Users/Users";
import AdminRoute from "./AdminRoute";
import AllPets from "../pages/Dashboard/AllPets/AllPets";
import AllDonations from "../pages/Dashboard/AllDonations/AllDonations";
import ItemDetails from "../pages/ItemDetails/ItemDetails";
import Cats from "../pages/CategoryPage/Cats";
import Dogs from "../pages/CategoryPage/Dogs";
import Rabbits from "../pages/CategoryPage/Rabbits";
import Birds from "../pages/CategoryPage/Birds";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorElements />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/cats',
        element: <Cats/>
      },
      {
        path: '/dogs',
        element: <Dogs/>
      },
      {
        path: '/rabbits',
        element: <Rabbits/>
      },
      {
        path: '/birds',
        element: <Birds/>
      },
      {
        path: "/petListing",
        element: <PetListing />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <ItemDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://happy-homes-hub-server.vercel.app/pets/${params.id}`),
      },
      {
        path: "/donationCampaigns",
        element: <DonationCampaigns />,
      },
      {
        path: "/donationDetails/:id",
        element: (
          <PrivetRoute>
            <DonationCampDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://happy-homes-hub-server.vercel.app/donations/${params.id}`),
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
        path: "petUpdate/:id",
        element: <PetUpdate />,
        loader: ({ params }) =>
          fetch(`https://happy-homes-hub-server.vercel.app/pets/${params.id}`),
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
        path: "campaignEdit/:id",
        element: <CampaignEdit />,
        loader: ({ params }) =>
          fetch(`https://happy-homes-hub-server.vercel.app/donations/${params.id}`),
      },
      {
        path: "myDonations",
        element: <MyDonations />,
      },
      // Admin Route
      {
        path: "admin_users",
        element: (
            <AdminRoute>
              <Users />
            </AdminRoute>
        ),
      },
      {
        path: "allPets",
        element: <AdminRoute>
          <AllPets />
        </AdminRoute>,
      },
      {
        path: "allDonations",
        element: <AdminRoute>
          <AllDonations />
        </AdminRoute>,
      },
    ],
  },
]);
