import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/supervisor", "routes/supervisor.tsx"),
  route("/login", "pages/login.tsx"),
  route("/neo-ai", "routes/neoAi.tsx"),
  route("/accounts", "routes/accounts.tsx"),
] satisfies RouteConfig;
