import { Box, Button, Typography } from "@mui/material";
import React from "react";

import tasks from "../../assets/tasks/tasks_bg.png";

const Tasks = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
      className="sectionWrapper"
    >
      <Box sx={{ width: "56%" }}>
        <Typography variant="h4" sx={{ color: "var(--azure-color)" }}>
          О том, чем мы занимаемся
        </Typography>
        <Typography sx={{padding: '25px 0 20px'}}>
          ГЭНДАЛЬФ – один из крупнейших игроков на рынке информационных
          технологий, занимающий 4 место среди 7000 партнеров фирмы «1С». У нас
          есть представительства в 15 городах России, а нашими услугами
          пользуются 23 000 организаций-клиентов, в числе которых «Базэл Аэро»,
          «Ростсельмаш», UTG. Аэропорт Кольцово и многие другие.
        </Typography>
        <Typography sx={{}}>
          Мы тщательно подходим к выбору сотрудников, которые становятся частью
          команды профессионалов.
        </Typography>
        <Typography sx={{padding: '20px 0 20px'}}>
          У нас работают специалисты разных областей: программисты, маркетологи,
          менеджеры, копирайтеры, методисты и другие, чей карьерный рост не
          ограничен привычными рамками.
        </Typography>
        <Box>
          <Button
            sx={{
              backgroundColor: "var(--azure-color)",
              marginRight: "3%",
              padding: "15px 27px",
              "&:hover": { color: 'var(--azure-color)!important' } // Moved the hover state inside a string

            }}
          >
            Почему мы
          </Button>
          <Button
            sx={{
              backgroundColor: "white",
              color: "var(--azure-color)!important",
              padding: "15px 27px",
              border: "1px solid var(--azure-color)",
            }}
          >
            Записаться на собеседование
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: "37%", marginRight: "-10px" }}>
        <Box
          component="img"
          sx={{
            width: "100%",
            maxWidth: '600px'
          }}
          alt="Tasks"
          src={tasks}
        />
      </Box>
    </Box>
  );
};

export default Tasks;
