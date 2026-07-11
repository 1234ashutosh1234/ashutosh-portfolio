"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type ChatAction =
  | {
      type: "message";
      payload: string;
    }
  | {
      type: "resume";
    }
  | {
      type: "github";
    }
  | {
      type: "linkedin";
    }
  | {
      type: "contact";
    }
  | {
      type: "project";
      payload: "n100" | "bluestock";
    };

interface ChatContextType {
  action: ChatAction | null;

  dispatch: (action: ChatAction) => void;

  clearAction: () => void;
}

const ChatContext =
  createContext<ChatContextType | null>(null);

export function ChatProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [action, setAction] =
    useState<ChatAction | null>(null);

  const dispatch = (
    action: ChatAction
  ) => {
    setAction(action);
  };

  const clearAction = () => {
    setAction(null);
  };

  return (
    <ChatContext.Provider
      value={{
        action,
        dispatch,
        clearAction,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error(
      "useChat must be used inside ChatProvider."
    );
  }

  return context;
}