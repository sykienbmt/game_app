import React, { ReactNode, useState } from "react";
import "./App.css";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
  const [item, setItem] = useState<Item | undefined>(undefined);

  const schema = yup.object().shape({
    level: yup
      .number()
      .min(6, "ĐM lv nhỏ nhất là 6 mà")
      .max(19, "Có lv cao hơn 19 à con gà")
      .typeError("ĐM lv nhỏ nhất là 6 mà"),
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
    const lv = watch().level!.toString();
    switch (lv) {
      case "6":
        return setItem(level6());
      case "7":
        return setItem(level7());
      case "8":
        return setItem(level8());
      case "9":
        return setItem(level9());
      case "10":
        return setItem(level10());
      case "11":
        return setItem(level11());
      case "12":
        return setItem(level12());
      case "13":
        return setItem(level13());
      case "14":
        return setItem(level14());
      case "15":
        return setItem(level15());
      case "16":
        return setItem(level16());
      case "17":
        return setItem(level17());
      case "18":
        return setItem(level18());
      case "19":
        return setItem(level19());
      default:
        break;
    }
  };

  const level6 = (): Item => {
    return {
      copy: 1,
      foodAny: 0,
      foodSame: 1,
      stone: 0,
      total: { copy: 1, foodAny: 0, foodSame: 1, stone: 0 },
    };
  };

  const level7 = (): Item => {
    return {
      copy: 0,
      foodAny: 0,
      foodSame: 2,
      stone: 500,
      note: "2 Food hệ",
      total: { copy: 1, foodAny: 0, foodSame: 3, stone: 500 },
    };
  };

  const level8 = (): Item => {
    return {
      copy: 0,
      foodAny: 0,
      foodSame: 3,
      stone: 500,
      note: "3 Food hệ",
      total: { copy: 1, foodAny: 0, foodSame: 6, stone: 1000 },
    };
  };

  const level9 = (): Item => {
    return {
      copy: 1,
      foodAny: 0,
      foodSame: 5,
      stone: 3000,
      note: "1 copy + 1 Food hệ 6* + 2 Food hệ",
      total: { copy: 2, foodAny: 0, foodSame: 11, stone: 4000 },
    };
  };

  const level10 = (): Item => {
    return {
      copy: 0,
      foodAny: 0,
      foodSame: 4,
      stone: 1000,
      note: "4 Food hệ",
      total: { copy: 2, foodAny: 0, foodSame: 15, stone: 5000 },
    };
  };

  const level11 = (): Item => {
    return {
      copy: 0,
      foodAny: 0,
      foodSame: 6,
      stone: 1000,
      note: "6 Food hệ",
      total: { copy: 2, foodAny: 0, foodSame: 21, stone: 6000 },
    };
  };

  const level12 = (): Item => {
    return {
      copy: 2,
      foodAny: 0,
      foodSame: 14,
      stone: 3000,
      note: "2 copy + 1 Food hệ 9*",
      total: { copy: 4, foodAny: 0, foodSame: 35, stone: 9000 },
    };
  };

  const level13 = (): Item => {
    return {
      copy: 0,
      foodAny: 0,
      foodSame: 6,
      stone: 1500,
      note: "6 Food hệ",
      total: { copy: 4, foodAny: 0, foodSame: 41, stone: 10500 },
    };
  };

  const level14 = (): Item => {
    return {
      copy: 0,
      foodAny: 0,
      foodSame: 8,
      stone: 1500,
      note: "8 Food hệ",
      total: { copy: 4, foodAny: 0, foodSame: 49, stone: 12000 },
    };
  };

  const level15 = (): Item => {
    return {
      copy: 3,
      foodAny: 14,
      foodSame: 14,
      stone: 8000,
      note: "3 copy + 1 Food hệ 9* + 1 Food bất kì 9*",
      total: { copy: 7, foodAny: 14, foodSame: 63, stone: 20000 },
    };
  };

  const level16 = (): Item => {
    return {
      copy: 0,
      foodAny: 14,
      foodSame: 0,
      stone: 15000,
      note: "1 Food bất kì 9*",
      total: { copy: 7, foodAny: 28, foodSame: 63, stone: 35000 },
    };
  };

  const level17 = (): Item => {
    return {
      copy: 3,
      foodAny: 40,
      foodSame: 11,
      stone: 20000,
      note: "1 copy 9* + 1 Food bất kì 12*",
      total: { copy: 10, foodAny: 28, foodSame: 74, stone: 55000 },
    };
  };

  const level18 = (): Item => {
    return {
      copy: 3,
      foodAny: 54,
      foodSame: 11,
      stone: 25000,
      note: "1 copy 9* + 1 Food bất kì 9* + 1 Food bất kì 12*",
      total: { copy: 13, foodAny: 122, foodSame: 85, stone: 80000 },
    };
  };

  const level19 = (): Item => {
    return {
      copy: 5,
      foodAny: 54,
      foodSame: 35,
      stone: 30000,
      note: "1 copy 12* + 1 Food bất kì 9* + 1 Food bất kì 12*",
      total: { copy: 18, foodAny: 176, foodSame: 120, stone: 110000 },
    };
  };

  const lv = Number(watch().level!.toString() ?? 0);

  return (
    <Container>
      <Typography
        position={"fixed"}
        sx={{
          bottom: 10,
          right: 10,
          color: "#808080",
        }}
      >
        By Starr: v2.0.0
      </Typography>
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
                onChange={(e) => {
                  field.onChange(e);
                  setItem(undefined);
                }}
                type={"number"}
              />
            );
          }}
        />

        <Button variant="contained" disabled={!isValid} onClick={onCalculating}>
          Nhập xong ấn vào chỗ này mấy con gà
        </Button>
      </Stack>

      <Stack pt={4} width={"100%"}>
        {item && (
          <Stack flexBasis={1}>
            <Typography variant="h5" textAlign={"center"} sx={{ color: "red" }}>
              Tính ra rồi dễ ẹc -_-
            </Typography>
            <Typography fontWeight={500} mt={3}>
              Nếu nâng từ lv{lv - 1} đến lv{lv} thì cần
            </Typography>
            <Stack pl={2}>
              <Typography>Số copy: {item.copy}</Typography>
              <Typography>Số food hệ: {item.foodSame}</Typography>
              <Typography>Số food bất kì: {item.foodAny}</Typography>
              <Typography>Số đá: {item.stone}</Typography>
              <Typography>Note: {item.note}</Typography>
            </Stack>

            <Typography mt={3} fontWeight={500}>
              Nếu nâng từ lv6 đến lv{lv} thì cần
            </Typography>
            <Stack pl={2}>
              <Typography>Số copy: {item.total.copy}</Typography>
              <Typography>Số food hệ: {item.total.foodSame}</Typography>
              <Typography>Số food bất kì: {item.total.foodAny}</Typography>
              <Typography>Số đá: {item.total.stone}</Typography>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Container>
  );
}

export default App;

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

export interface Item {
  copy: number;
  foodSame: number;
  foodAny: number;
  stone: number;
  total: Total;
  note?: string;
}

interface Total {
  copy: number;
  foodSame: number;
  foodAny: number;
  stone: number;
}
