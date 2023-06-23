import React, { ReactNode, useState } from "react";
import "./App.css";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
  const [text, setText] = useState<ReactNode>("");

  const schema = yup.object().shape({
    level: yup
      .number()
      .min(6, "ĐM nhỏ nhất là 6 mà")
      .max(19, "Có lv cao hơn 19 à con gà"),
  });

  const {
    handleSubmit,
    watch,
    reset,
    control,
    setValue,
    getValues,
    setError,
    formState: { isDirty, isValid, errors, touchedFields },
  } = useForm({
    mode: "all",
    defaultValues: {
      level: 6,
    },
    resolver: yupResolver(schema),
  });

  const onCalculating = () => {
    // setText(watch().level!.toString());
    setText(demo);
  };

  return (
    <Container>
      <Stack flexBasis={1} pt={6} spacing={2}>
        <Controller
          name="level"
          control={control}
          render={({ field, fieldState }) => {
            return (
              <TextField
                {...field}
                fullWidth
                label="Nhập lv zô đây nè"
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
                onChange={(e) => field.onChange(e)}
                type={"number"}
              />
            );
          }}
        />

        <Button variant="contained" disabled={!isValid} onClick={onCalculating}>
          Nhập xong ấn vào chỗ này mấy con gà
        </Button>
      </Stack>

      <Stack pt={3}>{text}</Stack>
    </Container>
  );
}

export default App;

const textInput = `5>6 : 1 copy+ 1 food hệ <br>
6>7 : 2 food 5* hệ
7>8  : 3 food 5* hệ
8>9 : 1 copy+1 food hệ 6*+2 food 5*hệ
9>10: 4 food hệ 5*
10>11: 6 food hệ 5*
11>12: 2 copy + 1 food hệ 9*
12>13: 6 food hệ 5*
13>14: 8 food hệ 5*
14>15:3 copy+ 1 food hệ 9*+ 1food 9* bất kì
15>16 : 1 food 9* bất kì
16>17 : 1 copy 9* + 1 food 12*
17>18 : 1 copy 9* + 1 food 12* + 1 food 9*
18>19 : 1 copy 12* + 1 food 12* + 1 food 9*`;

const demo = (
  <Stack>
    <Typography variant="h5" sx={{ mb: 3 }}>
      Mới demo ấn gì nó cũng ra như này thôi ahihi
    </Typography>
    <Typography>{"5>6 : 1 copy+ 1 food hệ"}</Typography>
    <Typography>{"6>7 : 2 food 5* hệ"}</Typography>
    <Typography>{"7>8  : 3 food 5* hệ"}</Typography>
    <Typography>{"8>9 : 1 copy+1 food hệ 6*+2 food 5*hệ"}</Typography>
    <Typography>{"9>10: 4 food hệ 5*"}</Typography>
    <Typography>{"10>11: 6 food hệ 5*"}</Typography>
    <Typography>{"11>12: 2 copy + 1 food hệ 9*"}</Typography>
    <Typography>{"12>13: 6 food hệ 5*"}</Typography>
    <Typography>{"13>14: 8 food hệ 5*"}</Typography>
    <Typography>{"14>15:3 copy+ 1 food hệ 9*+ 1food 9* bất kì"}</Typography>
    <Typography>{"15>16 : 1 food 9* bất kì"}</Typography>
    <Typography>{"16>17 : 1 copy 9* + 1 food 12*"}</Typography>
    <Typography>{"17>18 : 1 copy 9* + 1 food 12* + 1 food 9*"}</Typography>
    <Typography>{"18>19 : 1 copy 12* + 1 food 12* + 1 food 9*"}</Typography>
  </Stack>
);
