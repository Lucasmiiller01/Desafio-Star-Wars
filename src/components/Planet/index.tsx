import React, { Component, Fragment } from "react";
import {
  Grid,
  Box,
  withStyles,
  createStyles,
  CircularProgress
} from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import { ApplicationState } from "../../store";
import { Planet } from "../../store/ducks/planets/types";
import * as PlanetsActions from "../../store/ducks/planets/actions";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import DescriptionItem from "./DescriptionItem";

interface StateProps {
  classes?: any;
  readonly planet: Planet | null;
  readonly loading: boolean;
  readonly error: boolean;
}

interface DispatchProps {
  loadRequest(id: number): void;
}

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;
class PlanetMain extends Component<Props> {
  constructor(props: Props) {
    super(props);

    const { loadRequest } = this.props;
    loadRequest(this.getRndInteger(1, 60));
  }
  componentDidMount() {}

  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const { classes, planet, loading, error } = this.props;
    return (
      <Box border={!loading ? 5 : 0} className={classes.root}>
        <Grid item xs={12} className={classes.root}>
          {!loading && !error && planet ? (
            <Fragment>
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
            </Fragment>
          ) : (
            <CircularProgress color="primary" />
          )}
        </Grid>
      </Box>
    );
  }
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 20,
      backgroundColor: "red"
    },
    borderTitle: {
      marginLeft: -20,
      marginRight: -20
    }
  });

const mapStateToProps = (state: ApplicationState) => ({
  planet: state.planets.data,
  loading: state.planets.loading,
  error: state.planets.error
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(PlanetsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PlanetMain));
