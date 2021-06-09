import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../utils";

const PrivateRoute = ({  component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to={"/signin"} />
      }
    />
    /* <Route path='/signin'  component= {() => <Signin  {...this.props}/>}/> */
  );
};


export default PrivateRoute
