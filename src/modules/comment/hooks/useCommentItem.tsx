import { useState } from "react";

type Props = {
  refetch: () => void;
};

export function UseCommentItem({ refetch }: Props) {
  const [isVisibleAnswerPanel, setIsVisibleAnswerPanel] =
    useState<boolean>(false);

  const onVisibleAnswerPanel = () => {
    setIsVisibleAnswerPanel(true);
  };

  const onRevalidateData = () => {
    setIsVisibleAnswerPanel(false);
    refetch();
  };

  return {
    isVisibleAnswerPanel,
    setIsVisibleAnswerPanel,
    onVisibleAnswerPanel,
    onRevalidateData,
  };
}
