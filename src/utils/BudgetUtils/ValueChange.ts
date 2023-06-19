export const handleValueChange =
  (
    setError: React.Dispatch<React.SetStateAction<string | null>>,
    setValue: React.Dispatch<React.SetStateAction<number>>
  ) =>
  (value: string) => {
    const number = Number(value);
    if (isNaN(number)) {
      setError("Input must be a number");
    } else {
      setValue(number);
      setError(null);
    }
  };
