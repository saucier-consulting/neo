import { Navigate } from "react-router";

import logo from "~/assets/logo.svg";
import { LoginButton } from "../components/LoginButton";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/supervisor" replace />;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div>
          <img src={logo} alt="Neo Logo" className="w-12" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center mb-6">
            Welcome to Dashboard
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Please log in to continue
          </p>

          <div className="flex justify-center">
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
