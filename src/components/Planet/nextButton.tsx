import React from "react";
import { Button } from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";

interface OwnProps {
  onPress(): void;
  disabled: boolean;
}
export default function NextButton(props: OwnProps) {
  const { onPress, disabled } = props;
  return (
    <Button
      style={{ marginTop: 50, width: 500 }}
      variant="text"
      onClick={onPress}
      disabled={disabled}
      endIcon={<NavigateNext />}
    >
      NEXT
    </Button>
  );
}
