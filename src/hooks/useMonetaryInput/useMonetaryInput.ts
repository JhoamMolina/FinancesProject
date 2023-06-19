import { Dispatch, SetStateAction, useState } from "react";

export const useMonetaryState = (initialValue = 0) => {
  const [value, setValue] = useState<number>(initialValue);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    inputValue: string,
    setDisplayCalculatedSalary: Dispatch<SetStateAction<boolean>>
  ) => {
    const number = Number(inputValue);
    if (isNaN(number)) {
      setError("Input must be a number");
    } else {
      setValue(number);
      setDisplayCalculatedSalary(false);
      setError(null);
    }
  };

  return { value, handleChange, error };
};
