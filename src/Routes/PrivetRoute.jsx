import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div
        aria-label="Loading..."
        role="status"
        className="flex items-center space-x-2 justify-center mt-16"
      >
        <svg
          className="h-20 w-20 animate-spin stroke-primary-light"
          viewBox="0 0 256 256"
        >
          <line x1="128" y1="32" x2="128" y2="64"></line>
          <line x1="195.9" y1="60.1" x2="173.3" y2="82.7"></line>
          <line x1="224" y1="128" x2="192" y2="128"></line>
          <line x1="195.9" y1="195.9" x2="173.3" y2="173.3"></line>
          <line x1="128" y1="224" x2="128" y2="192"></line>
          <line x1="60.1" y1="195.9" x2="82.7" y2="173.3"></line>
          <line x1="32" y1="128" x2="64" y2="128"></line>
          <line x1="60.1" y1="60.1" x2="82.7" y2="82.7"></line>
        </svg>
        <span className="text-4xl font-medium text-primary-light">Loading...</span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} replace to="/login" />;
};

export default PrivetRoute;
