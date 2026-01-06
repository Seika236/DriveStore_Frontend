import { useState } from "react";

export function UseDialog() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onOpenDialog = () => {
    setIsVisible((prevState) => !prevState);
  };

  return {
    isVisible,
    onOpenDialog,
  };
}
