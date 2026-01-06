import { Icon } from "@chakra-ui/react";

type Props = {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
};

export const PenOffIcon = ({ size = "sm" }: Props) => {
  return (
    <Icon size={size} color="current">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-pen-off-icon lucide-pen-off"
      >
        <path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" />
        <path d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" />
        <path d="m2 2 20 20" />
      </svg>
    </Icon>
  );
};
