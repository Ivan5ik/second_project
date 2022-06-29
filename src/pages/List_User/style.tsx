import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "980px",
    margin: "0px auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: "30px",
  },
  pagination: {
    display: "block",
    marginTop: "50px",
    marginBottom: "70px",
  },
  cardAnt: {
    display: "flex",
    width: "450px",
    marginBottom: "20px",
    textAlign: "left",
    wordBreak: "break-all",
    "& .ant-card-body": {
      padding: "15px",
    },
  },
  metaAnt: {
    "& .ant-card-body": {
      padding: "0px",
    },
  },
});
export default useStyles;
