import React from "react";
import { Routes, Route as RouteDOM } from "react-router-dom";

import { ListUser } from "../pages/List_User";
import { Home } from "../pages/Home_Page";
import { Forma } from "../pages/Auth";
import { PrivateRoute } from "../pages/Private_Route";

import useStyles from "./style";

const Route = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Routes>
        <RouteDOM path="/" element={<Home />} />
        <RouteDOM path="/login" element={<Forma />} />
        <RouteDOM
          path="/listUser"
          element={
            <PrivateRoute>
              <ListUser />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
export { Route };
