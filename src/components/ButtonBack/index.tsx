import React, { FC } from "react";
import { Button } from "antd";

import useStyles from "./style";

interface IBack {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const ButtonBack: FC<IBack> = (props) => {
  const classes = useStyles();

  const { currentPage, setCurrentPage } = props;

  const back = () => {
    if (currentPage <= 1) {
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={classes.root}>
      <Button type="primary" onClick={back}>
        Back
      </Button>
    </div>
  );
};
export { ButtonBack };
