import { api } from "./api";

class UserList {
  user(countView: number, currentPage: number) {
    const resp = api.get(
      `?seed=Shopper&results=${countView}&page=${currentPage}`
    );
    return resp;
  }
}
export default new UserList();
