import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/services",
    Component: Services,
  },
  {
    path: "/portfolio",
    Component: Portfolio,
  },
  {
    path: "/team",
    Component: Team,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
