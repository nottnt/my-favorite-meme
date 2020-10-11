import React from "react";
import LazyLoad from "react-lazyload";
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import useStyles from './styleHook';



const gridListImage = ({ imageData, width }) => {
  const classes = useStyles();

  const getGridListCols = () => {
    console.log(width)
    if (isWidthUp('xl', width)) {
      return 4;
    }

    if (isWidthUp('lg', width)) {
      return 3;
    }

    if (isWidthUp('md', width)) {
      return 2;
    }

    return 1;
  }

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={"auto"}
        className={classes.gridList}
        spacing={30}
        cols={getGridListCols()}
      >
        {/* <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile> */}
        {imageData.map((image) => (
          <GridListTile
            key={image.imgLink}
            className={classes.gridListTile}
          >
            <LazyLoad height={"auto"}>
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

export default withWidth()(gridListImage);
