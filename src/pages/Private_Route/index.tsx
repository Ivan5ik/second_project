import React, { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

import { StoreContext } from "../../store";

interface IPrivateRoute {
  children: ReactElement<any, any> | null;
}

const PrivateRoute: FC<IPrivateRoute> = ({ children }) => {
  const context = React.useContext(StoreContext);

  if (!context.check) {
    return <Navigate to="/login" />;
  }
  return children;
};

export { PrivateRoute };
