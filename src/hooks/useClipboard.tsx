import { UseToaster } from "@/hooks/useToaster";

type Props = {
  writeText: string;
  successText?: string;
};

export function UseClipboard({ successText, writeText }: Props) {
  const { successMassage, errorMassage } = UseToaster();

  const clipboardHandler = async () => {
    try {
      await navigator.clipboard.writeText(writeText);
      successMassage(successText || "ссылка была успешно скопирована");
    } catch (e) {
      errorMassage("произошла ошибка, пожалуйста повторите попытку");
    }
  };

  return {
    clipboardHandler,
  };
}
