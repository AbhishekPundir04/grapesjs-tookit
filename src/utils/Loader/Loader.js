import { Backdrop } from "@mui/material";
import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader = ({ open, visible }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <ThreeCircles
        height="100"
        width="100"
        color="#D74E09"
        wrapperStyle={{}}
        wrapperClass=""
        visible={visible}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor="#D74E09"
        middleCircleColor="#D74E09"
      />
    </Backdrop>
  );
};

export default Loader;
