import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ButtonsCalculadora from "./ButtonsCalculadora";
import Input from "./Input";
import useStyles from "./styles";

const ButtonCalculadora = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");
  const styles = useStyles();

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (num: string) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMultiplicarNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("X");
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleDiviNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
          case "/":
          handleDiviNumbers();
          break;
          case "X":
          handleMultiplicarNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Grid container spacing={1} sx={styles.container}>
      <Grid item xs={12}>
        <Input resultado={currentNumber} />
      </Grid>
      <Grid item xs={12} sx={styles.botoes}>
        <ButtonsCalculadora
          simbolo="AC"
          corButton="SimbolosCinzas"
          onClick={handleOnClear}
        />
        <ButtonsCalculadora
          simbolo="+/-"
          corButton="SimbolosCinzas"
          onClick={() => {}}
        />
        <ButtonsCalculadora
          simbolo="%"
          corButton="SimbolosCinzas"
          onClick={() => {}}
        />
        <ButtonsCalculadora
          simbolo="/"
          corButton="SimbolosLaranja"
          onClick={handleDiviNumbers}
        />
      </Grid>
      <Grid item xs={12} sx={styles.botoes}>
        <ButtonsCalculadora
          simbolo="7"
          corButton="Numeros"
          onClick={() => handleAddNumber("7")}
        />
        <ButtonsCalculadora
          simbolo="8"
          corButton="Numeros"
          onClick={() => handleAddNumber("8")}
        />
        <ButtonsCalculadora
          simbolo="9"
          corButton="Numeros"
          onClick={() => handleAddNumber("9")}
        />
        <ButtonsCalculadora
          simbolo="X"
          corButton="SimbolosLaranja"
          onClick={handleMultiplicarNumbers}
        />
      </Grid>
      <Grid item xs={12} sx={styles.botoes}>
        <ButtonsCalculadora
          simbolo="4"
          corButton="Numeros"
          onClick={() => handleAddNumber("4")}
        />
        <ButtonsCalculadora
          simbolo="5"
          corButton="Numeros"
          onClick={() => handleAddNumber("5")}
        />
        <ButtonsCalculadora
          simbolo="6"
          corButton="Numeros"
          onClick={() => handleAddNumber("6")}
        />
        <ButtonsCalculadora
          simbolo="-"
          corButton="SimbolosLaranja"
          onClick={handleMinusNumbers}
        />
      </Grid>
      <Grid item xs={12} sx={styles.botoes}>
        <ButtonsCalculadora
          simbolo="1"
          corButton="Numeros"
          onClick={() => handleAddNumber("1")}
        />
        <ButtonsCalculadora
          simbolo="2"
          corButton="Numeros"
          onClick={() => handleAddNumber("2")}
        />
        <ButtonsCalculadora
          simbolo="3"
          corButton="Numeros"
          onClick={() => handleAddNumber("3")}
        />
        <ButtonsCalculadora
          simbolo="+"
          corButton="SimbolosLaranja"
          onClick={handleSumNumbers}
        />
      </Grid>
      <Grid item xs={12} sx={styles.botoes}>
        <ButtonsCalculadora
          simbolo="0"
          corButton="NumeroZero"
          onClick={() => handleAddNumber("0")}
        />
        <ButtonsCalculadora
          simbolo="."
          corButton="Numeros"
          onClick={() => {}}
        />
        <ButtonsCalculadora
          simbolo="="
          corButton="SimbolosLaranja"
          onClick={handleEquals}
        />
      </Grid>
    </Grid>
  );
};

export default ButtonCalculadora;
