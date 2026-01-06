import { ChangeEvent, useState } from "react";

export function UseInput() {
  const [value, setValue] = useState<string>("");
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const reset = (): void => {
    setValue("");
  };

  return {
    onChange,
    reset,
    value,
  };
}
