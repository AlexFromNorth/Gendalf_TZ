import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import oneSlide from "../../assets/priorities/one.png";
import twoSlide from "../../assets/priorities/two.png";
import threeSlide from "../../assets/priorities/three.png";
import fourSlide from "../../assets/priorities/four.png";
import fiveSlide from "../../assets/priorities/five.png";


// данные для карусели
const data = [
  {
    id: 0,
    img: oneSlide,
    label: "Быть командой",
    text: "Готовность вносить вклад в общие цели команды и достигать их.",
  },
  {
    id: 1,
    img: twoSlide,
    label: "Побеждать и не сдаваться",
    text: "Быть ориентированным на результат, настойчивым и не сдаваться перед трудностями.",
  },
  {
    id: 2,
    img: threeSlide,
    label: "Заботиться о клиентах",
    text: "Выполнять обещания и интересоваться потребностями своих клиентов",
  },
  {
    id: 2,
    img: fourSlide,
    label: "Быть увлеченным и ответственным",
    text: "Вкладывать душу в то, что делаешь и получать от работы удовольствие.",
  },
  {
    id: 2,
    img: fiveSlide,
    label: "Развиваться",
    text: "Постоянно расти личностно и профессионально для достижения поставленных целей.",
  }
];

const CustomCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, // Отключаем автопрокрутку
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };



  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        onClick={goToPrev}
        style={{
          position: "absolute",
          left: 0,
          transform: "translateY(-50%)",
          backgroundColor: "var(--azure-color)",
          opacity: 0.8,
          top: "50%",
          zIndex: 1,
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={goToNext}
        style={{
          position: "absolute",
          right: 0,
          transform: "translateY(-50%)",
          backgroundColor: "var(--azure-color)",
          opacity: 0.8,
          top: "50%",
          zIndex: 1,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
      <Slider ref={sliderRef} {...settings}>
        {data.map((item) => (
          <Box key={item.id} sx={{textAlign: 'center'}}>
            <Box
              component="img"
              sx={{
                maxWidth: '600px',
                margin: '0 auto'
              }}
              alt="Gendalf"
              src={item.img}
            />
            <Typography variant="h6" sx={{margin: '10px 0 5px'}}>
              {item.label}
            </Typography>
            <Typography sx={{}}>{item.text}</Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CustomCarousel;
