import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useStyles from "./styles";

type InputProps = {
  resultado: string;
};

const Input = ({ resultado }: InputProps) => {
  const styles = useStyles();

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.input}>{resultado}</Typography>
    </Box>
  );
};

export default Input;
