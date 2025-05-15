import { useAuth } from "~/hooks/useAuth";

export const LoginButton = () => {
  const { login } = useAuth();

  return (
    <button
      onClick={() => login()}
      className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
    >
      Log In
    </button>
  );
};
