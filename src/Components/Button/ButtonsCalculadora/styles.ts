const useStyles = () => ({
  laranja: {
    width: 45,
    borderRadius: 28,
    borderStyle: "solid",
    margin: 0.5,
    backgroundColor: "#FFA500",
    color: "white",
    "&:hover": {
      color: "white",
      backgroundColor: "#FFA500",
      cursor: "pointer",
    },
  },
  cinza: {
    width: 45,
    borderRadius: 28,
    borderStyle: "solid",
    margin: 0.5,
    backgroundColor: "#D3D3D3",
    "&:hover": {
      color: "white",
      backgroundColor: "#C0C0C0",
      cursor: "pointer",
    },
  },
  numeros: {
    width: 45,
    borderRadius: 28,
    borderStyle: "solid",
    margin: 0.5,
    backgroundColor: "#808080	",
    color: "white",
    "&:hover": {
      color: "white",
      backgroundColor: "#808080",
      cursor: "pointer",
    },
  },
  numeroZero: {
    width: 100,
    borderRadius: 28,
    borderStyle: "solid",
    margin: 0.5,
    backgroundColor: "#808080	",
    color: "white",
    "&:hover": {
      color: "white",
      backgroundColor: "#808080",
      cursor: "pointer",
    },
  },
});

export default useStyles;
