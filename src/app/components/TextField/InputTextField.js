import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Divider, FormControl, IconButton, InputLabel, OutlinedInput } from "@mui/material";
import "./textField.scss";
export default function InputTextField({
  type,
  icon,
  value,
  name,
  placeholder,
  onChange,
  endAdornment,
  defaultValue,
  onKeyPress,
  onPaste,
  blueColor
}) {
  return (
    <div className="input_field_wrapper">
    <FormControl fullWidth>
      <OutlinedInput
        value={value}
        endAdornment={endAdornment}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        icon={icon}
        defaultValue={defaultValue}
        variant="outlined"
        fullWidth
        onKeyPress={onKeyPress}
        onPaste={onPaste}
        className={blueColor}
      />
    </FormControl>
    </div>

  );
}
