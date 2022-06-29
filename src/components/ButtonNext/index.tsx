import React, { FC } from "react";
import { Button } from "antd";

import useStyles from "./style";

interface INext {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const ButtonNext: FC<INext> = (props) => {
  const classes = useStyles();

  const { currentPage, setCurrentPage } = props;

  const next = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className={classes.root}>
      <Button type="primary" onClick={next}>
        Next
      </Button>
    </div>
  );
};
export { ButtonNext };
