import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextareaAutosize,
  Box,
  Radio,
  RadioGroup,
} from "@mui/material";

import error from "../../assets/form/false.png";
import success from "../../assets/form/true.png";
import file from "../../assets/form/file.png";

import style from "./form.module.scss";
import {
  RadioButtonChecked,
  RadioButtonCheckedOutlined,
  RadioButtonCheckedRounded,
} from "@mui/icons-material";

const ApplicationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formToggle, setFormToggle] = useState(false);

  const onSubmit = (data) => {
    // Обработка данных формы
    console.log(data);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ position: "relative" }}>
        <TextField
          label="Как к вам обращаться?"
          sx={{
            display: "flex",
            textAlign: "center",
            backgroundColor: "white",
            borderRadius: "5px",
            border: errors.name ? "1px solid red" : "1px solid green",
          }}
          variant="filled"
          {...register("name", { required: true })}
        />

        {!errors.name && formToggle ? (
          <img
            src={success}
            alt="success"
            style={{
              right: "15px",
              top: "12px",
              position: "absolute",
              zIndex: "11",
            }}
          />
        ) : errors.name && formToggle ? (
          <img
            src={error}
            alt="error"
            style={{
              right: "15px",
              top: "12px",
              position: "absolute",
              zIndex: "11",
            }}
          />
        ) : (
          false
        )}
      </Box>

      <Box sx={{ position: "relative" }}>
        <TextField
          label="Телефон"
          {...register("phone", {
            required: true,
            pattern: /^[0-9+\(\)#\.\s\/ext-]+$/,
          })}
          variant="filled"
          sx={{
            display: "flex",
            backgroundColor: "white",
            borderRadius: "5px",
            margin: "6px 0",
            border: errors.phone ? "1px solid red" : "1px solid green",
          }}
        />
        {!errors.phone && formToggle ? (
          <img
            src={success}
            alt="success"
            style={{
              right: "15px",
              top: "12px",
              position: "absolute",
              zIndex: "11",
            }}
          />
        ) : errors.phone && formToggle ? (
          <img
            src={error}
            alt="error"
            style={{
              right: "15px",
              top: "12px",
              position: "absolute",
              zIndex: "11",
            }}
          />
        ) : (
          false
        )}
      </Box>

      <Box sx={{ position: "relative" }}>
        <TextField
          label="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          sx={{
            display: "flex",
            backgroundColor: "white",
            borderRadius: "5px",
            border: errors.email ? "1px solid red" : "1px solid green",
          }}
          variant="filled"
        />
        {!errors.email && formToggle ? (
          <img
            src={success}
            alt="success"
            style={{
              right: "15px",
              top: "12px",
              position: "absolute",
              zIndex: "11",
            }}
          />
        ) : errors.email && formToggle ? (
          <img
            src={error}
            alt="error"
            style={{
              right: "15px",
              top: "12px",
              position: "absolute",
              zIndex: "11",
            }}
          />
        ) : (
          false
        )}
      </Box>

      <TextField
        label="Желаемая должность"
        {...register("desiredPosition")}
        sx={{
          display: "flex",
          backgroundColor: "white",
          borderRadius: "5px",
          margin: "6px 0 17px",
        }}
        variant="filled"
      />

      <p>Выберите категорию занятости:</p>

      <RadioGroup>
        <FormControlLabel
          control={
            <Radio {...register("officeWork")} sx={{ color: "white" }} />
          }
          label="Работа в офисе"
          sx={{ display: "flex" }}
          value="officeWork"
        />

        <FormControlLabel
          control={
            <Radio {...register("internship")} sx={{ color: "white" }} />
          }
          label="Стажировка"
          sx={{ display: "flex" }}
          value="internship"
        />

        <FormControlLabel
          control={
            <Radio {...register("remoteWork")} sx={{ color: "white" }} />
          }
          label="Удаленная работа"
          sx={{ display: "flex", marginBottom: "17px" }}
          value="remoteWork"
        />
      </RadioGroup>

      <TextareaAutosize
        minRows={5}
        className="w-full"
        placeholder="Ваши вопросы"
        {...register("questions")}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "17px",
          width: "100%",
          "@media screen and (max-width: 1140px)": {
            "& ": {
              flexDirection: "column",
            },
            "& > *": {
              width: "100%!important",
              marginTop: '10px!important',
            },
          },
        }}
      >
        <label htmlFor="file-upload" className={style.customFileUpload}>
          <Box
            sx={{
              padding: "14px 24px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              color: "var(--green-color)",
              textAlign: "center",
              borderColor: errors.attachment ? "red" : "green",
            }}
          >
            <input
              id="file-upload"
              type="file"
              {...register("attachment")}
              className={style.fileInput}
            />
            Прикрепить резюме
            
              <img
                src={file}
                alt="file"
                style={{ marginLeft: "auto", paddingRight: "5px" }}
              />

          </Box>
        </label>

        <Button
          onClick={() => setFormToggle(true)}
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "var(--green-color)",
            width: "60%",
            "&:hover": { backgroundColor: "var(--green-color)!important" },
          }}
        >
          Оставить заявку
        </Button>
      </Box>
    </form>
  );
};

export default ApplicationForm;
