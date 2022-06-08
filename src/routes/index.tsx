import React from "react";
import { Routes, Route as RouteDOM } from "react-router-dom";
import { routes } from "./routes";

import useStyles from "./style";

const Route = () => {
  const classes = useStyles();

  return (
    <div>
      <Routes>
        {routes.map((item) => (
          <RouteDOM path={item.path} element={item.component} />
        ))}
      </Routes>
    </div>
  );
};
export { Route };
