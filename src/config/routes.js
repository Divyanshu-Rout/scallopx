import { lazy } from "react";

export const routes = {
  home: {
    path: "/",
    component: lazy(() => import("../pages/Home/Home")),
    exact: true,
  },
  contactUs: {
    path: "/contact-us",
    component: lazy(() => import("../pages/ContactUs/ContactUs")),
    exact: true,
  },
  appLanding: {
    path: "/app-landing",
    component: lazy(() => import("../pages/AppLanding/AppLanding")),
    exact: true,
  },
  // learnLanding: {
  //   path: "/learn",
  //   component: lazy(() => import("../pages/learn/learnLanding")),
  //   exact: true,
  // },
  // ambassadorProgram: {
  //   path: "/ambassadorprogram",
  //   component: lazy(() => import("../pages/ambassadorProgram/ambassadorProgram")),
  //   exact: true,
  // },
};

export const renderRoutes = Object.entries(routes);
