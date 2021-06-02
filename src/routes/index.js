import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Home from "../pages";
import { Signin, Signup } from "../pages/Authentication";
import Dashboard from "../pages/Dashboard";
import Forgotpassword from "../pages/Authentication/Forgotpassword";
import Resetpassword from "../pages/Authentication/Resetpassword";
import Worksheet from "../pages/Worksheet";
import Profile from '../pages/Profile'
import { ROUTES } from "./constant";
import PublicRoute from "./Public.route";
import PrivateRoute from "./Private.route";

const publicroutesConfig = [
  {
    key: 1,
    component: Home,
    path: ROUTES.HOME,
  },
  {
    key: 2,
    component: Signin,
    path: ROUTES.SIGNIN,
  },
  {
    key: 3,
    component: Signup,
    path: ROUTES.SIGNUP,
  },
  {
    key: 4,
    component: Dashboard,
    path: ROUTES.DASHBOARD,
  },
  {
    key: 5,
    component: Forgotpassword,
    path: ROUTES.FORGOTPASSWORD,
  },
  {
    key: 6,
    component: Resetpassword,
    path: ROUTES.RESETPASSWORD,
  },
];

const PrivateroutesConfig = [
  {
    key: 1,
    component: Worksheet,
    path: ROUTES.WORKSHEET,
  },

  {
    key:2,
    component : Profile,
    path:ROUTES.PROFILE
  }
];

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <>
          {publicroutesConfig.map((i) => {
            return (
              <PublicRoute
                key={i.key.toString()}
                restricted={false}
                component={i.component}
                path={i.path}
                exact
              />
            );
          })}

          {PrivateroutesConfig.map((i) => {
            return (
              <PrivateRoute
                key={i.key.toString()}
                restricted={true}
                component={i.component}
                path={i.path}
                exact
              />
            );
          })}
        </>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
