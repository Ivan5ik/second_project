import { Home } from "../pages/Home_Page";
import { ListUser } from "../pages/List_User";
import { Forma } from "../pages/Auth";

export const routes = [
  { path: "/", component: <Home /> },
  { path: "/listUser", component: <ListUser /> },
  { path: "/login", component: <Forma /> },
];
