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
        "@media screen and (max-width: 1140px)": {
          display: "none",
        },
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
      <Link href="#" className="underline-link">Профориентация </Link>
      <Link href="#" className="underline-link">Выбрать вакансию</Link>
      <Link href="#" className="underline-link">Карьера в ГЭНДАЛЬФ</Link>
      <Link href="#" className="underline-link">Стажерство</Link>
      <Link href="#" className="underline-link">Отзывы</Link>

      <Button
        sx={{
          padding: "7px 14px 8px",
          backgroundColor: "white",
          color: 'var(--azure-color)!important',
          "&:hover": { color: 'var(--white-text)!important' } 
        }}
      >
        Запись на собеседование
      </Button>
    </Box>
  );
};

export default Header;
