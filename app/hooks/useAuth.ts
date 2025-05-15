import { useAuth0 } from "@auth0/auth0-react";
import { useMockAuth } from "../components/MockAuthProvider";

const hasAuth0Config = () => {
  return !!(
    import.meta.env.VITE_AUTH0_DOMAIN && import.meta.env.VITE_AUTH0_CLIENT_ID
  );
};

export const useAuth = () => {
  let auth;

  if (hasAuth0Config()) {
    try {
      auth = useAuth0();
    } catch {
      auth = useMockAuth();
    }
  } else {
    auth = useMockAuth();
  }

  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
    user,
    getAccessTokenSilently,
  } = auth;

  return {
    isAuthenticated,
    isLoading,
    user,
    login: loginWithRedirect,
    logout: () =>
      logout({ logoutParams: { returnTo: window.location.origin } }),
    getAccessToken: getAccessTokenSilently,
  };
};
