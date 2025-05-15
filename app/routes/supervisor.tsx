import type { Route } from "./+types/home";
import SupervisorPage from "../pages/supervisor";
import { useAuth } from "~/hooks/useAuth";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Neo Supervisor" }];
}

export default function Supervisor() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return <SupervisorPage />;
}
