import { createUseStyles } from "react-jss";

import { globalColors } from "../../utils";

const useStyles = createUseStyles({
  root: { background: globalColors.blue },
  header: {
    maxWidth: "980px",
    width: "100%",
    height: "100px",
    margin: "0px auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imgHeader: {
    width: "70px",
    height: "70px",
    borderRadius: "10px",
    display: "block",
    cursor: "pointer",
  },
  textHeader: {
    width: "100%",
    fontFamily: "revert",
    fontSize: "20px",
    color: globalColors.white,
    maxWidth: "900px",
    display: "flex",
    justifyContent: "space-between",
    "& .show": {
      display: "none",
    },
    "& .color": {
      color: globalColors.yellow,
      padding: "0px",
      margin: "0px",
    },
    paddingLeft: "30px",
    alignItems: "center",
  },
  cursor: {
    cursor: "pointer",
    marginTop: "0px",
    marginBottom: "0px",
    "&:hover": {
      color: globalColors.yellow,
    },
  },
});
export default useStyles;
