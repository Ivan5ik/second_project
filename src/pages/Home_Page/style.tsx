import { createUseStyles } from "react-jss";

import { globalColors } from "../../utils";

const useStyles = createUseStyles({
  root: {
    background: "#d3d3c0",
    "& .ant-carousel .slick-dots-bottom": {
      bottom: "-50px",
    },
    "& .ant-carousel .slick-dots li.slick-active button": {
      background: globalColors.blue,
    },
    "& .ant-carousel .slick-dots li button": {
      background: "#32ffa6",
      height: "5px",
    },
  },
  coverCarousel: {
    width: "980px",
    margin: "0px auto",
    height: "80vh",
  },

  styleImg: {},
  contentStyle: {
    marginRight: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  photo: { width: "490px", height: "275px", borderRadius: "5px" },
  coverComponent: {
    display: "flex !important",
    paddingTop: "17%",
  },
  title: {
    color: globalColors.black,
    lineHeight: "1.1",
    fontSize: "20px",
  },
  description: {
    color: globalColors.black,
    fontSize: "16px",
    fontWeight: "400",
    marginBottom: "5px",
    lineHeight: "1.3",
  },
});
export default useStyles;
