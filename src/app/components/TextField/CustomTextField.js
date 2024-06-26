import React from "react";
import TextField from "@mui/material/TextField";
import { InputLabel, FormControl } from "@mui/material";
import "./textField.scss";

export default function CustomTextField({
  title,
  placeholder,
  labelClassTextfield,
  rows,
  istextField,
  istextArea,
  name,
  value,
  id,
  onChange,
  onKeyPress,
  props,
  onKeyDown,
  onInput,
  disabled,
  endAdornment,
  readOnly,
  showStar,
}) {
  const hiddenBorderStyle = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
    },
  };
  return (
    <div className="custom_textfield_wrapper">
      <InputLabel id="label" className={labelClassTextfield}>
        {title} {showStar && <span className="star">*</span>}
      </InputLabel>
      <FormControl fullWidth>
        {istextField && (
          <TextField
            fullWidth
            placeholder={placeholder}
            onChange={onChange}
            id={id}
            name={name}
            value={value}
            onKeyPress={onKeyPress}
            onKeyDown={onKeyDown}
            onInput={onInput}
            style={hiddenBorderStyle}
            disabled={disabled}
            readOnly={readOnly}
          >
            {endAdornment}
          </TextField>
        )}
        {istextArea && (
          <TextField
            fullWidth
            placeholder={placeholder}
            onChange={onChange}
            id={id}
            rows={rows}
            name={name}
            value={value}
            onKeyPress={onKeyPress}
            onInput={onInput}
            multiline
            disabled={disabled}
          />
        )}
      </FormControl>
    </div>
  );
}
