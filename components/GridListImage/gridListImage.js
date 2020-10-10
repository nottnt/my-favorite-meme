import React from "react";
import LazyLoad from "react-lazyload";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
    marginTop: '4rem',
    backgroundImage:
      "linear-gradient(140deg, #000000 0%, #333333 50%, #333333 75%)",
  },
  gridList: {
    width: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const gridListImage = ({ imageData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={"auto"}
        className={classes.gridList}
        cols={4}
        spacing={30}
      >
        {/* <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile> */}
        {imageData.map((image) => (
          <GridListTile key={image.imgLink}>
            <LazyLoad height={'auto'}>
              <img src={image.imgLink} alt={image.title} />
            </LazyLoad>
            <GridListTileBar
              title={image.title}
              subtitle={<span>by: {image.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${image.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default gridListImage;
