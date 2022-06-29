import { createUseStyles } from "react-jss";

import { globalColors } from "../../utils";

const inSidePallet = {
  boxSizing: "border-box",
  colorForBorder: globalColors.darkGrey,
  width: "960px",
  fontSize: "18px",
};
const useStyles = createUseStyles({
  root: {
    width: "100%",
    height: "450px",
    background: globalColors.milk,
    padding: "50px 0px 35px 0px",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "980px",
    height: "400px",
    margin: "0px 105px 0px 105px",
    padding: "0px 10px 0px 10px",
    boxSizing: inSidePallet.boxSizing,
  },
  top: {
    borderTop: `2px solid ${globalColors.darkGrey}`,
    width: inSidePallet.width,
    boxSizing: "border-box",
    height: "56px",
    padding: "12px 0px 12px 0px",
    display: "flex",
    justifyContent: "space-between",
  },
  contacts: {
    width: inSidePallet.width,
    boxSizing: "border-box",
    height: "183px",
    borderTop: `2px solid ${globalColors.darkGrey}`,
    padding: "20px 0px 20px 0px",
    display: "flex",
  },
  bottom: {
    width: inSidePallet.width,
    boxSizing: "border-box",
    height: "160px",
    borderTop: `2px solid ${globalColors.black}`,
    paddingTop: "30px",
  },
  menu: {
    display: "flex",
    justifyContent: "space-between",
    width: "768px",
    "& .show": {
      display: "none",
    },
  },

  link: {
    display: "block",
    color: globalColors.white,
    fontSize: inSidePallet.fontSize,
    "&:hover": {
      cursor: "pointer",
      color: globalColors.sea,
      transition: "all 0.3s",
    },
    textDecoration: "none",
  },

  topAside: {
    color: globalColors.lightGrey,
    fontSize: inSidePallet.fontSize,
    "&:hover": {
      cursor: "pointer",
      color: globalColors.yellow,
      transition: "all 0.3s",
    },
    marginTop: "0px",
  },
  contactsRight: {
    width: "210px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: "7px",
  },
  contactsMain: {
    width: "558px",
    borderLeft: `2px solid ${globalColors.darkGrey}`,
    borderRight: `2px solid ${globalColors.darkGrey}`,
    padding: "0px 30px 0px 30px",
  },
  contactsLeft: {
    width: "205px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  contactsMainTop: {
    height: "70px",
  },
  contactsMainBottom: {
    height: "70px",
  },
  pForContacts: {
    color: globalColors.lightGrey,
    fontSize: "17px",
    textAlign: "center",
  },
  social: {
    width: inSidePallet.width,
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  },
  copyRight: {
    width: inSidePallet.width,
    boxSizing: "border-box",
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
  },
  pictureFacebook: {
    width: "60px",
    height: "60px",
    borderRadius: "10px",
    display: "block",
    margin: "0px 50px 0px 50px",
  },
  pForCopyRight: {
    color: globalColors.lightGrey,
    fontSize: "14px",
    display: "block",
  },
  logo: {
    width: "23px",
    height: "23px",
    borderRadius: "10px",
    display: "block",
    marginLeft: "7px",
  },
});

export default useStyles;
