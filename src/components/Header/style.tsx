import { createUseStyles } from "react-jss";
import { globalColors } from "../../utils";

const useStyles = createUseStyles({
  root: { background: globalColors.blue },
  header: {
    maxWidth: "980px",
    width: "100%",
    height: "120px",
    margin: "0px auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imgHeader: {
    width: "90px",
    height: "90px",
    borderRadius: "10px",
    display: "block",
  },
  textHeader: {
    width: "100%",
    cursor: "pointer",
    fontFamily: "revert",
    fontSize: "20px",
    color: globalColors.white,
    maxWidth: "900px",
    display: "flex",
    justifyContent: "space-around",
  },
});
export default useStyles;
