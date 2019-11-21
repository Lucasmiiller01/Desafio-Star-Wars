import React from "react";
import { Typography } from "@material-ui/core";

interface OwnProps {
  label?: string;
  text: string;
  variant: any;
  styleContainer?: object;
  styleLabel?: object;
  styleText?: object;
}

export default function DescriptionItem({
  text,
  variant,
  label = "",
  styleContainer = {},
  styleLabel = {},
  styleText = {}
}: OwnProps) {
  return (
    <div style={styleContainer}>
      <Typography variant={variant} style={styleLabel}>
        {label}
      </Typography>
      <Typography variant={variant} style={styleText}>
        {text}
      </Typography>
    </div>
  );
}
