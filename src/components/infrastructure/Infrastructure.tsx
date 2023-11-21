import { Box, Typography } from "@mui/material";
import React from "react";

import videoPrev from "../../assets/infrastructure/video_prevui.png";

const Infrastructure = () => {
  return (
    <Box className="gradient" sx={{ padding: "61px 14% 49px 5%" }}>
      <Typography
        variant="h4"
        sx={{ color: "var(--azure-color)", marginBottom: "43px", textAlign: 'center' }}
      >
        Инфраструктура для твоего развития и роста
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            width: "40%",
          }}
        >
          <Typography sx={{ marginBottom: "20px" }}>
            Мы создаем платформу для профессионального развития каждого
            сотрудника. Главная цель – дать возможность учиться, работать и
            получать удовольствие от каждой успешной задачи.
          </Typography>
          <Typography>
            О возможностях личностного роста в ГЭНДАЛЬФ расскажет руководитель
            Департамента персонала и карьеры Татьяна Арсенович.
          </Typography>
        </Box>
        <Box
          component="img"
          sx={{
            width: "50%",
            maxWidth: '800px',
            backgroundSize: 'cover',
          }}
          alt="Video"
          src={videoPrev}
        />
      </Box>
    </Box>
  );
};

export default Infrastructure;
