import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import play_icon from "../../assets/answers/play.png";
import { Box } from "@mui/material";

import styles from './styles.module.scss'

const dataQuestions = [
  {
    id: 0,
    label: "На что нужно обратить внимание на собеседовании?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. ",
  },
  {
    id: 1,
    label: "Как правильно составить резюме?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. ",
  },
  {
    id: 2,
    label: "Возможно ли устроиться без опыта?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. ",
  },
  {
    id: 3,
    label: "Ошибки на собеседовании. Чего нужно избегать?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. ",
  },
];

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
      {dataQuestions.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === `${item.id}`}
          onChange={handleChange(`${item.id}`)}
          sx={{ backgroundColor: "initial", border: "none", boxShadow: "none" }}
          className={styles.accordion}
        >
          <AccordionSummary
            aria-controls={`panel${item.id}bh-content`}
            id={`panel${item.id}bh-header`}
            className="verticalCenter"
          >
            <Box
              component="img"
              sx={{
                height: 23,
                width: 23,
                marginRight: "15px",
              }}
              alt="Gendalf"
              src={play_icon}
            />
            <Typography sx={{ color: "text.secondary", textDecoration: 'underline' }}>
              {item.label}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
