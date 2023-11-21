import { Box, Typography } from "@mui/material";
import React from "react";

import bg from "../../assets/form/from_bg.jpg";
import ApplicationForm from "./ApplicationForm";

const Form = () => {
  return (
    <Box
      sx={{
        padding: "61px 18%",
        color: "var(--white-text)",
        backgroundImage: `linear-gradient(rgba(0, 47, 61, 0.50), rgba(0, 47, 61, 0.50)), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 183, 236, 0.9)",
          padding: "56px 13%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: "46px",
            marginTop: "24px",
            textAlign: 'center'
          }}
        >
          Записаться на собеседование
        </Typography>
        <ApplicationForm/>
      </Box>
    </Box>
  );
};

export default Form;
