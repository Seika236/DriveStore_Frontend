import { authStore } from "@/store/authStore";

export function UseDefaultSettingsFormValue() {
  const { user } = authStore();

  const defaultValues = {
    email: user?.email,
    nickname: user?.nickname,
    about: user?.about,
    city: user?.address?.city,
    age: String(user?.age),
    name: user?.name,
  };

  return {
    defaultValues,
  };
}
