import { Button } from "@mui/material";
import React from "react";
import { useNavigation } from "react-router-dom";
import { LoadingSpinner } from "../../components";
const SubmitBtn = ({ text, variant, color, style }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Button
      type="submit"
      color={color}
      variant={variant}
      sx={{ marginBottom: "1rem" }}
    >
      {isSubmitting ? <LoadingSpinner /> : text || "submit"}
    </Button>
  );
};

export default SubmitBtn;
