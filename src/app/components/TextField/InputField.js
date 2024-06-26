import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Divider, FormControl, IconButton, InputLabel, OutlinedInput } from "@mui/material";
import "./textField.scss";
export default function InputField({
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
}) {
  return (
    <div className="textfeild-wrapper">

    <FormControl fullWidth>
    
      <OutlinedInput
        value={value}
        // startAdornment={
        //   <>
        //     <InputAdornment position="start">
        //       <img src={icon} alt="icon" style={{ marginRight: ".5rem" }}></img>
        //     </InputAdornment>
        //   </>
        // }
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
      />
    </FormControl>
    </div>

  );
}
