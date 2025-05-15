import { createContext, useContext, useState, type ReactNode } from "react";
import defaultAvatar from "~/assets/default-avatar.svg";

interface MockUser {
  email: string;
  name: string;
  sub: string;
  picture: string;
}

interface MockAuthContextType {
  isAuthenticated: boolean;
  user: MockUser | undefined;
  isLoading: boolean;
  error?: Error;
  loginWithRedirect: () => void;
  logout: () => void;
  getAccessTokenSilently: () => Promise<string>;
}

const MockAuthContext = createContext<MockAuthContextType | null>(null);

const MOCK_USER: MockUser = {
  email: "dev@example.com",
  name: "Development User",
  sub: "mock|user123",
  picture: defaultAvatar,
};

export const MockAuth0Provider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<MockUser | undefined>(undefined);

  const loginWithRedirect = () => {
    setIsLoading(true);
    setTimeout(() => {
      setUser(MOCK_USER);
      setIsAuthenticated(true);
      setIsLoading(false);
    }, 1000);
  };

  const logout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setUser(undefined);
      setIsAuthenticated(false);
      setIsLoading(false);
    }, 1000);
  };

  const getAccessTokenSilently = async () => {
    return "mock-access-token";
  };

  return (
    <MockAuthContext.Provider
      value={{
        isAuthenticated,
        user,
        isLoading,
        loginWithRedirect,
        logout,
        getAccessTokenSilently,
      }}
    >
      {children}
    </MockAuthContext.Provider>
  );
};

export const useMockAuth = () => {
  const context = useContext(MockAuthContext);
  if (!context) {
    throw new Error("useMockAuth must be used within a MockAuth0Provider");
  }
  return context;
};
