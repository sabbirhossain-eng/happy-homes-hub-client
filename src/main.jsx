import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProviders from "./Provider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <div className="mx-auto">
        <RouterProvider router={router} />
      </div>
      </HelmetProvider>
      </QueryClientProvider>
    </AuthProviders>
    <Toaster position="top-center" reverseOrder={false} /> 
  </React.StrictMode>
);
