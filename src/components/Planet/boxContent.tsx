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
    <Box border={5} className={classes.root} borderRadius={20}>
      <Grid item xs={12} className={classes.root}>
        <DescriptionItem
          text={planet.name}
          variant="h4"
          styleText={{
            textAlign: "center",
            marginBottom: 20,
            color: "#FFF"
          }}
        />
        <Box borderTop={5} className={classes.borderTitle} />

        <DescriptionItem
          styleContainer={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20
          }}
          styleLabel={{
            color: "#FFF"
          }}
          styleText={{
            marginLeft: 50
          }}
          text={planet.population}
          label={"Population"}
          variant="h6"
        />
        <DescriptionItem
          text={planet.climate}
          label={"Climate"}
          variant="h6"
          styleLabel={{
            color: "#FFF"
          }}
          styleText={{
            marginLeft: 50
          }}
          styleContainer={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        />

        <DescriptionItem
          text={planet.terrain}
          label={"TERRAIN"}
          styleLabel={{
            color: "#FFF"
          }}
          styleText={{
            marginLeft: 50
          }}
          variant="h6"
          styleContainer={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        />

        <DescriptionItem
          text={planet.films.length + " FILMS"}
          label={"FEATURED IN"}
          styleLabel={{
            color: "#FFF"
          }}
          styleText={{
            marginLeft: 50
          }}
          styleContainer={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
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
