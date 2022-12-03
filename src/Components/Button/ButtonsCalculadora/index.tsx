import IconButton from "@mui/material/IconButton";
import useStyles from "./styles";

export type color =
  | "SimbolosLaranja"
  | "SimbolosCinzas"
  | "Numeros"
  | "NumeroZero";

export type coresBotoes = "laranja" | "cinza" | "numeros" | "numeroZero";

type ButtonsCalculadoraProps = {
  simbolo: string;
  corButton: color;
  onClick: () => void;
};

const ButtonsCalculadora = ({
  simbolo,
  corButton,
  onClick,
}: ButtonsCalculadoraProps) => {
  const styles = useStyles();

  const opcaoCoresBotoes: Record<color, coresBotoes> = {
    SimbolosLaranja: "laranja",
    SimbolosCinzas: "cinza",
    Numeros: "numeros",
    NumeroZero: "numeroZero",
  };

  return (
    <IconButton
      sx={styles[opcaoCoresBotoes[corButton]] ?? {}}
      onClick={onClick}
    >
      {simbolo}
    </IconButton>
  );
};

export default ButtonsCalculadora;
