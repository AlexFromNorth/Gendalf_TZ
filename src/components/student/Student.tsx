import { Box, Button, Typography } from "@mui/material";
import React from "react";

import bg from "../../assets/student/student__bg.jpg";

const Student = () => {
  return (
    <Box
      sx={{
        padding: "83px 0 141px",
        textAlign: "center",
        color: "var(--white-text)",
        backgroundImage: `linear-gradient(rgba(0, 47, 61, 0.50), rgba(0, 47, 61, 0.50)), url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Typography variant="h4" sx={{ width: '50%', margin: '0 auto 43px' }}>
        Ты студент и хочешь устроиться на практику?
      </Typography>
      <Button sx={{ backgroundColor: "var(--green-color)" }}>
        Оставить заявку
      </Button>
    </Box>
  );
};

export default Student;
