import { Home } from "../pages/Home_Page";
import { ListUser } from "../pages/List_User";
import { Login } from "../pages/Log_in";

export const routes = [
  { path: "/", component: <Home /> },
  { path: "/listUser", component: <ListUser /> },
  { path: "/login", component: <Login /> },
];
