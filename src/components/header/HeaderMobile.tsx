import { Box, Button, Link } from "@mui/material";
import React from "react";

import logo from "../../assets/header/logo_mobile.png";
import account from "../../assets/header/account.png";
import basket from "../../assets/header/basket.png";
import search from "../../assets/header/search.png";

import BurgerMenu from "./BurgerMenu";

const HeaderMobile = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        height: "101px",
        alignItems: "center",
        "& > div > header": { backgroundColor: "initial" },
        "@media screen and (min-width: 1140px)": {
          display: "none",
        } 
      }}
      className="sectionWrapper"
    >
      <Box
        component="img"
        sx={{
          height: 30,
          width: 30,
        }}
        alt="Gendalf"
        src={search}
      />
      <Box
        component="img"
        sx={{
          height: 30,
          width: 30,
        }}
        alt="Gendalf"
        src={basket}
      />
      <Box
        component="img"
        sx={{
          height: 84,
          width: 74,
        }}
        alt="Gendalf"
        src={logo}
      />
      <Box
        component="img"
        sx={{
          height: 30,
          width: 30,
        }}
        alt="Gendalf"
        src={account}
      />

      <BurgerMenu/>

    </Box>
  );
};

export default HeaderMobile;
