import { createUseStyles } from "react-jss";

import { globalColors } from "../../utils";

const useStyles = createUseStyles({
  root: {
    padding: "100px 0 100px 0",
    "& .ant-col-8": {
      display: "flex !important",
      justifyContent: "flex-start",
    },

    "& .ant-tabs-tab-btn": {
      fontSize: "18px",
      fontFamily: "inherit",
      fontWeight: "700",
    },
    "& .ant-tabs-nav-list": {
      width: "380px !important",
    },
    "& .ant-tabs-tab": {
      width: "50%",
      display: "flex",
      justifyContent: "center",
    },
    "& .ant-tabs-tab ant-tabs-tab-active": {
      width: "50%",
      display: "flex",
      justifyContent: "center",
    },
  },
  cover: {
    width: "400px",
    margin: "0px auto",
    padding: "0 10px 0 10px",
    background: globalColors.white,
  },
  paragraphHeader: {
    fontSize: "20px",
    fontWeight: "700",
    textAlign: "left",
  },

  tabAnt: {
    width: "380px !important",
    "& .ant-col-16": {
      maxWidth: "50%",
    },
    "& .ant-form-item": {
      display: "flex ",
      justifyContent: "space-between",
    },
    "& .ant-col-8": {
      flex: "none",
      maxWidth: "50%",
    },
    "& .ant-input-number": {
      width: "100%",
    },
    "& .ant-picker": {
      width: "100%",
    },
  },
  ro: {
    color: "white",
  },
});

export default useStyles;
