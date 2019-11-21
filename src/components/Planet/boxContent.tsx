import React from "react";
import { Grid, makeStyles, Box } from "@material-ui/core";
import DescriptionItem from "./DescriptionItem";

import { Planet } from "../../store/ducks/planets/types";

interface OwnProps {
  planet: Planet;
}

export default function BoxContent({ planet }: OwnProps) {
  const classes = useStyles();

  return (
    <Box border={5} className={classes.root}>
      <Grid item xs={12} className={classes.root}>
        <DescriptionItem
          text={planet.name}
          variant="h4"
          style={{ textAlign: "center" }}
        />
        <Box borderTop={5} className={classes.borderTitle} />

        <DescriptionItem
          text={planet.population}
          label={"Population: "}
          variant="h6"
        />
        <DescriptionItem
          text={planet.climate}
          label={"Climate: "}
          variant="h6"
        />

        <DescriptionItem
          text={planet.terrain}
          label={"TERRAIN: "}
          variant="h6"
        />

        <DescriptionItem
          text={planet.films.length + " FILMS"}
          label={"FEATURED IN "}
          variant="h6"
        />
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    margin: 20,
    backgroundColor: "black"
  },
  borderTitle: {
    marginLeft: -20,
    marginRight: -20
  }
});
