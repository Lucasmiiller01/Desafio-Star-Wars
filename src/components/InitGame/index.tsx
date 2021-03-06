import React, { Component } from "react";
import { withStyles, createStyles, Grid, Fade } from "@material-ui/core";

import { Theme } from "@material-ui/core/styles/createMuiTheme";
import TextFade from "../TextFade";
import StarWarsLogo from "../../shared/imgs/logo.png";
import { ApplicationState } from "../../store";

import * as GameActions from "../../store/ducks/game/actions";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

interface StateProps {
  classes?: any;
  started: boolean;
}

interface DispatchProps {
  startGame(): void;
}

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;
class InitGame extends Component<Props> {
  _handleKeyDown = (event: Event) => {
    const { started, startGame } = this.props;
    if (!started) startGame();
  };
  componentDidMount() {
    document.addEventListener("keydown", this._handleKeyDown);
    document.addEventListener("click", this._handleKeyDown);
  }

  componentDidCatch() {
    document.removeEventListener("keydown", this._handleKeyDown);
    document.removeEventListener("click", this._handleKeyDown);
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid item className={classes.root}>
        <Fade in={true} timeout={4000} style={{ margin: 20 }}>
          <img src={StarWarsLogo} className={classes.imgLogo} alt="Logo" />
        </Fade>
        <TextFade text={"Press any key to start the game"} interval={1000} />
      </Grid>
    );
  }
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center"
    },
    imgLogo: {
      maxWidth: "50%",
      maxHeight: "50%"
    },
    borderTitle: {
      marginLeft: -20,
      marginRight: -20
    }
  });

const mapStateToProps = (state: ApplicationState) => ({
  started: state.game.started
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(GameActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(InitGame));
