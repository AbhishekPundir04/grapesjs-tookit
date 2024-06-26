import React, { useState } from "react";

export default function usePasswordToggle() {
  const [type, setPasswordType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmType, setConfirmType] = useState("password");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (type, setType, setShow) => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
    setShow((prevShow) => !prevShow);
  };

  const handleClickShowPassword = () => {
    togglePasswordVisibility(type, setPasswordType, setShowPassword);
  };

  const handleClickShowConfirmPassword = () => {
    togglePasswordVisibility(
      confirmType,
      setConfirmType,
      setShowConfirmPassword
    );
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return {
    showPassword,
    type,
    handleClickShowPassword,
    handleClickShowConfirmPassword,
    confirmType,
    handleMouseDownPassword,
    showConfirmPassword,
  };
}
