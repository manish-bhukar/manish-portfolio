
"use client";

import { Bot, User } from "lucide-react";
import type { ChatMessage as ChatMessageType } from"../../types/chatbot.types";

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({
  message,
}: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex w-full items-start gap-2.5 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-lime-300/20 bg-lime-300/10 text-lime-300">
          <Bot size={17} aria-hidden="true" />
        </div>
      )}

      <div
        className={`max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-3 text-sm leading-6 ${
          isUser
            ? "rounded-tr-sm bg-lime-300 text-zinc-950"
            : "rounded-tl-sm border border-white/10 bg-zinc-900 text-zinc-200"
        }`}
      >
        {message.content}
      </div>

      {isUser && (
        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300">
          <User size={17} aria-hidden="true" />
        </div>
      )}
    </div>
  );
}
