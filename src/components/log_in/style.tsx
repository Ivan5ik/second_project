import { createUseStyles } from "react-jss";

import { globalColors } from "../../utils";

const useStyles = createUseStyles({
  root: {
    "& .tab1-0-2-53": {
      width: "100% ",
    },
  },
  login: {
    width: "100%",
    fontSize: "20px",
    fontWeight: "700",
    borderBottom: `1px solid ${globalColors.orangeForRegistr}`,
  },
  textLogin: {
    marginBottom: "0px",
    paddingBottom: "8px",
    "&:hover": {
      color: globalColors.orangeForRegistr,
      cursor: "pointer",
    },
  },
});
export default useStyles;
