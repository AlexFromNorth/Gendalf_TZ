import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";

const Priorities = () => {
  return (
    <Box className="sectionWrapper" sx={{backgroundColor: 'var(--grey-bg)', paddingTop: '45px', paddingBottom: '35px'}}>
      <Typography variant="h4" sx={{ color: "var(--azure-color)", marginBottom: '37px' }}>
        Наши ценности скажут о нас больше:
      </Typography>
      <Carousel/>
    </Box>
  );
};

export default Priorities;
