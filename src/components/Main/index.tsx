import React from "react";
import CopyRight from "../CopyRight";
import Planet from "../Planet";
import { Grid, Divider, makeStyles } from "@material-ui/core";
import InitGame from "../InitGame";
import { useSelector } from "../../shared/customUseSelector";

export default function Main() {
  const classes = useStyles();
  const started = useSelector(state => state.game.started);

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      {started ? <Planet /> : <InitGame />}
      <Grid item xs={12}>
        <Divider className={classes.dividerCopyRight} />
        <CopyRight />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles({
  container: {
    height: "100vh"
  },
  dividerCopyRight: {
    marginBottom: 20
  }
});
