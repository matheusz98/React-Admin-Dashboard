import { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import SuspenseLoader from "../components/SuspenseLoader";

// Loader
const Loader = (Component?: any) => (props?: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Sidebar
const Sidebar = Loader(lazy(() => import("../layouts/Sidebar")));

// Dashboard
const Dashboard = Loader(lazy(() => import("../pages/Dashboard")));

// Messenger
const Messenger = Loader(lazy(() => import("../pages/Messenger")));

// Transactions
const Transactions = Loader(lazy(() => import("../pages/Transactions")));

// Profile
const Profile = Loader(lazy(() => import("../pages/Profile")));

// Settings
const Settings = Loader(lazy(() => import("../pages/Settings")));

// Typography
const Typography = Loader(lazy(() => import("../pages/Components/Typography")));

// Buttons
const Buttons = Loader(lazy(() => import("../pages/Components/Buttons")));

// Modals
const Modals = Loader(lazy(() => import("../pages/Components/Modals")));

// Accordions
const Accordions = Loader(lazy(() => import("../pages/Components/Accordions")));

// Tabs
const Tabs = Loader(lazy(() => import("../pages/Components/Tabs")));

// Badges
const Badges = Loader(lazy(() => import("../pages/Components/Badges")));

// Tooltips
const Tooltips = Loader(lazy(() => import("../pages/Components/Tooltips")));

// Avatars
const Avatars = Loader(lazy(() => import("../pages/Components/Avatars")));

// Cards
const Cards = Loader(lazy(() => import("../pages/Components/Cards")));

// Forms
const Forms = Loader(lazy(() => import("../pages/Components/Forms")));

// Error 404
const Page404 = Loader(lazy(() => import("../pages/Status/Page404")));

// Error 500
const Page500 = Loader(lazy(() => import("../pages/Status/Page500")));

// Coming Soon
const ComingSoon = Loader(lazy(() => import("../pages/Status/ComingSoon")));

// Maintenance
const MaintenancePage = Loader(
  lazy(() => import("../pages/Status/MaintenancePage"))
);

const routes: RouteObject[] = [
  {
    path: "",
    element: <Sidebar />,
    children: [
      {
        path: "dashboard",
        element: <Navigate to="/" replace />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "status",
        children: [
          {
            path: "",
            element: <Navigate to="404" replace />,
          },
          {
            path: "404",
            element: <Page404 />,
          },
          {
            path: "500",
            element: <Page500 />,
          },
          {
            path: "coming-soon",
            element: <ComingSoon />,
          },
          {
            path: "maintenance",
            element: <MaintenancePage />,
          },
        ],
      },
      {
        path: "*",
        element: <Page404 />,
      },
      {
        path: "messenger",
        element: <Messenger />,
      },
    ],
  },

  {
    path: "management",
    element: <Sidebar />,
    children: [
      {
        path: "",
        element: <Navigate to="transactions" replace />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "profile",
        children: [
          {
            path: "",
            element: <Navigate to="details" replace />,
          },
          {
            path: "details",
            element: <Profile />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },

  {
    path: "/components",
    element: <Sidebar />,
    children: [
      {
        path: "",
        element: <Navigate to="typography" replace />,
      },
      {
        path: "typography",
        element: <Typography />,
      },
      {
        path: "buttons",
        element: <Buttons />,
      },
      {
        path: "modals",
        element: <Modals />,
      },
      {
        path: "accordions",
        element: <Accordions />,
      },
      {
        path: "tabs",
        element: <Tabs />,
      },
      {
        path: "badges",
        element: <Badges />,
      },
      {
        path: "tooltips",
        element: <Tooltips />,
      },
      {
        path: "avatars",
        element: <Avatars />,
      },
      {
        path: "cards",
        element: <Cards />,
      },
      {
        path: "forms",
        element: <Forms />,
      },
    ],
  },
];

export default routes;
