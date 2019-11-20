import React from "react";
import { Typography } from "@material-ui/core";

interface OwnProps {
  label?: string;
  text: string;
  variant: any;
  style?: object;
}

export default function DescriptionItem({
  text,
  variant,
  label = "",
  style = {}
}: OwnProps) {
  return (
    <Typography variant={variant} style={style}>
      {label + text}
    </Typography>
  );
}
