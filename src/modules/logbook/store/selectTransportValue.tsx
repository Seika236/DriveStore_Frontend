import { create } from "zustand";
import { combine } from "zustand/middleware";

interface SelectTransportValueStoreState {
  transportValue: string;
}

interface SelectTransportValueActions {
  setTransportValue: (value: string) => void;
}

type SelectTransportValueStore = SelectTransportValueActions &
  SelectTransportValueStoreState;

export const selectTransportValueStore = create<SelectTransportValueStore>(
  combine({ transportValue: "" }, (set) => ({
    setTransportValue: (value: string) =>
      set(() => ({
        transportValue: value,
      })),
  })),
);
