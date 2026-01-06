import { useState } from "react";

export function UseOpenBurgerMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenBurgerMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onBurgerButtonLeave = () => {
    setIsOpen(false);
  };

  const onBurgerButtonEnter = () => {
    setIsOpen(true);
  };

  const onMouseLeaveMenu = () => {
    setIsOpen(false);
  };

  const onMouseEnterMenu = () => {
    setIsOpen(true);
  };

  return {
    isOpen,
    onBurgerButtonEnter,
    onBurgerButtonLeave,
    onMouseEnterMenu,
    onMouseLeaveMenu,
    onOpenBurgerMenu,
  };
}
