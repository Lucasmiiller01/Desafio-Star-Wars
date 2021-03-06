import React, { Component } from "react";
import { Typography, Fade } from "@material-ui/core";

interface StateProps {
  fadeIn: boolean;
}

interface OwnProps {
  text: string;
  interval: number;
}

type Props = OwnProps;

type State = StateProps;

class TextFade extends Component<Props, State> {
  public intervalID: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      fadeIn: false
    };
  }

  componentDidMount = () => {
    const { interval } = this.props;
    this.intervalID = setInterval(() => {
      this.setState({ fadeIn: !this.state.fadeIn });
    }, interval);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalID);
  };

  render() {
    const { interval, text } = this.props;

    const { fadeIn } = this.state;
    return (
      <Fade in={fadeIn} timeout={interval}>
        <Typography
          variant={"h4"}
          color={"textPrimary"}
          style={{ textAlign: "center" }}
        >
          {text}
        </Typography>
      </Fade>
    );
  }
}

export default TextFade;
