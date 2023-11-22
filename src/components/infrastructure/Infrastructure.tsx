import { Box, Typography } from "@mui/material";
import React from "react";

import videoPrev from "../../assets/infrastructure/video_prevui.png";

const Infrastructure = () => {
  return (
    <Box
      className="gradient"
      sx={{
        padding: "61px 8% 49px",
        "@media screen and (max-width: 1140px)": {
          paddingLeft: "10px",
          paddingRight: "10px",
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "var(--azure-color)",
          marginBottom: "43px",
          textAlign: "center",
        }}
      >
        Инфраструктура для твоего развития и роста
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          "@media screen and (max-width: 1140px)": {
            "& ": {
              flexDirection: "column",
            },
            "& > div": {
              width: "100%",
            },
            "& img": {
              marginTop: "30px",
              width: "100%",
            },
          },
        }}
      >
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
            maxWidth: "800px",
            backgroundSize: "cover",
          }}
          alt="Video"
          src={videoPrev}
        />
      </Box>
    </Box>
  );
};

export default Infrastructure;
