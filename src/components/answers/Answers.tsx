import { Box, Typography } from "@mui/material";
import React from "react";

import answers_img from "../../assets/answers/answers_bg.png";
import ControlledAccordions from "./ControlledAccordions";

const Answers = () => {
  return (
    <Box className="gradient sectionWrapper" sx={{ paddingTop: "36px", paddingBottom: '35px' }}>
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
              marginBottom: "46px",
              marginTop: '24px',
            }}
          >
            Ответы на вопросы
          </Typography>
          <ControlledAccordions/>
        </Box>
        <Box
          component="img"
          sx={{
            width: "40%",
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
