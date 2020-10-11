import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
    marginTop: "4rem",
    backgroundImage:
      "linear-gradient(140deg, #000000 0%, #333333 50%, #333333 75%)",
  },
  gridList: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  gridListTile: {
    width: "auto !important",
    padding: "2rem !important",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default useStyles;