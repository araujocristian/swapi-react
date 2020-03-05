import Home from "./pages/Home";
import Planet from "./pages/Planet";

const routes = [
  { path: "/", component: Home, exact: true },
  { path: "/planet", component: Planet, exact: true }
];

export default routes;
