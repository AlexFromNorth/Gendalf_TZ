import { Box, Button, Link } from "@mui/material";
import React from "react";

import logo from "../../assets/header/logo.png";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "var(--azure-color)",
        display: "flex",
        justifyContent: "space-between",
        height: "101px",
        alignItems: "center",
      }}
      className="sectionWrapper"
    >
      <Box
        component="img"
        sx={{
          height: 84,
          width: 74,
        }}
        alt="Gendalf"
        src={logo}
      />
      <Link href="#">Профориентация </Link>
      <Link href="#">Выбрать вакансию</Link>
      <Link href="#">Карьера в ГЭНДАЛЬФ</Link>
      <Link href="#">Стажерство</Link>
      <Link href="#">Отзывы</Link>

      <Button
        sx={{
          padding: "7px 14px 8px",
          backgroundColor: "white",
          color: 'var(--azure-color)!important'
        }}
      >
        Запись на собеседование
      </Button>
    </Box>
  );
};

export default Header;
