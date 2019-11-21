import React, { Component } from "react";
import {
  Grid,
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

import BoxContent from "./boxContent";
import randomNumberByRange from "../../shared/randomNumberByRange";

import NextButton from "./nextButton";

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
    loadRequest(randomNumberByRange(1, 60));
  }
  componentDidMount() {}

  render() {
    const { planet, loading, error, loadRequest } = this.props;
    let RenderContent = null;
    if (!loading && error) {
      RenderContent = <h1> Ocorreu um erro, tente novamente mais tarde </h1>;
    } else if (!loading && planet) {
      RenderContent = <BoxContent planet={planet} />;
    } else if (loading) {
      RenderContent = <CircularProgress color="primary" />;
    }
    return (
      <Grid container justify="center" alignItems="center" direction="column">
        {RenderContent}
        <NextButton
          onPress={() => loadRequest(randomNumberByRange(1, 60))}
          disabled={loading}
        />
      </Grid>
    );
  }
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 20,
      backgroundColor: "black"
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
