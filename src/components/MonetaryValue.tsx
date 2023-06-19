import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

interface IMoneyInputProps {
  label: string;
  id: string;
  value: number;
  onChange: (value: string) => void;
  error: string | null;
}

export const MonetaryInput = (props: IMoneyInputProps) => {
  const { label, id, value, onChange, error } = props;

  return (
    <FormControl fullWidth sx={{ m: 1 }} error={!!error}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        label="Amount"
        value={value || ""}
        onChange={(ev) => onChange(ev.target.value)}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};
