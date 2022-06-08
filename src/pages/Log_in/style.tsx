import { createUseStyles } from "react-jss";

import { globalColors } from "../../utils";

const useStyles = createUseStyles({
  root: {
    padding: "100px 0 100px 0",
    "& .ant-col-8": {
      width: "50% !important",
      display: "flex !important",
      justifyContent: "flex-start",
    },
  },
  cover: {
    width: "400px",
    margin: "0px auto",
    padding: "0 10px 0 10px",
    background: globalColors.white,
  },
  textHeader: {},
  paragraphHeader: {
    fontSize: "20px",
    fontWeight: "700",
    textAlign: "left",
  },
  registration: {
    width: "50%",
    fontSize: "20px",
    fontWeight: "700",
    borderBottom: `1px solid ${globalColors.violet}`,
  },
  login: {
    width: "50%",
    fontSize: "20px",
    fontWeight: "700",
    borderBottom: `1px solid ${globalColors.violet}`,
  },
  coverAutorization: {
    display: "flex",
    borderTop: "1px solid #bfc4c0",
    marginBottom: "20px",
    paddingTop: "8px",
    "& .show": {
      borderBottom: `4px solid ${globalColors.violet}`,
      width: "50%",
      fontSize: "20px",
      fontWeight: "700",
    },
  },
  textLogin: {
    marginBottom: "0px",
    paddingBottom: "8px",
    "&:hover": {
      color: globalColors.violet,
      cursor: "pointer",
    },
  },
  textRegistration: {
    marginBottom: "0px",
    paddingBottom: "8px",
    "&:hover": {
      color: globalColors.violet,
      cursor: "pointer",
    },
  },
});

export default useStyles;
