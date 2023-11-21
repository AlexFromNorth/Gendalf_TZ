import { Box, Button, Typography } from "@mui/material";
import React from "react";
import bg from "../../assets/welcome/welcome_bg.jpg";

const Welcome = () => {
  return (
    <Box
      sx={{
        position: "relative",
        padding: "20% 14% 0",
        backgroundImage: `linear-gradient(rgba(0, 47, 61, 0.77), rgba(0, 47, 61, 0.77)), url(${bg})`,
        backgroundRepeat: 'no-repeat',
        height: 'calc(100vh - 101px)',
        backgroundSize: 'cover',
        textAlign: "center",
      }}
    >
      <Typography variant="h1" sx={{}}>
        Добро пожаловать в ГЭНДАЛЬФ!
      </Typography>
      <Typography variant="h5" sx={{margin: '2% 0 4%', color: 'var(--white-text)'}}>
        Мы готовы поделиться секретом, почему любим компанию, в которой
        работаем. Если тебе будут близки наши ценности и идеи, то смело
        записывайся на собеседование!
      </Typography>

      <Box>
        <Button sx={{backgroundColor: 'var(--green-color)', marginRight: '3%', padding: '15px 27px'}}>Почему мы</Button>
        <Button sx={{backgroundColor: 'white', color: 'var(--green-color)!important', padding: '15px 27px'}}>Записаться на собеседование</Button>
      </Box>
    </Box>
  );
};

export default Welcome;
