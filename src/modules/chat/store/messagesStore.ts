import { create } from "zustand";
import { combine } from "zustand/middleware";
import { IMessage } from "../../../types/models/IMessage";
import { immer } from "zustand/middleware/immer";

interface MessagesStoreState {
  messages: IMessage[];
}

interface MessagesStoreActions {
  setMessage: (message: IMessage) => void;
  setAllMessages: (message: IMessage[]) => void;
  updateMessage: (message: IMessage) => void;
}

type DrawerStore = MessagesStoreState & MessagesStoreActions;

export const messagesStore = create<DrawerStore>()(
  immer(
    combine({ messages: [] }, (set) => ({
      setMessage: (message) =>
        set((state) => {
          state.messages.push(message);
        }),
      setAllMessages: (messages) =>
        set((state) => {
          state.messages = messages;
        }),
      updateMessage: (updatedMessage) =>
        set((state) => {
          const newMessages = state.messages.map((message) => {
            if (message.id === updatedMessage.id) {
              return updatedMessage;
            }
            return message;
          });
          state.messages = newMessages;
        }),
    })),
  ),
);
