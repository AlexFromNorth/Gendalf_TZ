import { Box, Typography } from "@mui/material";
import React from "react";

import answers_img from "../../assets/answers/answers_bg.png";
import ControlledAccordions from "./ControlledAccordions";

const Answers = () => {
  return (
    <Box className="gradient" sx={{ padding: "61px 14% 49px 5%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            width: "40%",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "var(--azure-color)",
              marginBottom: "43px",
            }}
          >
            Ответы на вопросы
          </Typography>
          <ControlledAccordions/>
        </Box>
        <Box
          component="img"
          sx={{
            width: "50%",
            backgroundSize: "cover",
          }}
          alt="Video"
          src={answers_img}
        />
      </Box>
    </Box>
  );
};

export default Answers;
