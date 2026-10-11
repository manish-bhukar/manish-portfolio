"use client";

import { useEffect, useRef } from "react";
import { Bot, Sparkles } from "lucide-react";

import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";

import type { ChatMessage as ChatMessageType } from "../../types/chatbot.types";

interface ChatWindowProps {
  messages: ChatMessageType[];
  isLoading: boolean;
  error: string | null;
  onSendMessage: (message: string) => void | Promise<void>;
  onClose: () => void;
}

export function ChatWindow({
  messages,
  isLoading,
  error,
  onSendMessage,
  onClose,
}: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const hasMessages = messages.length > 0;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isLoading]);

  return (
    <section
      aria-label="Ask Manish AI chat window"
      className="
        mb-3 flex
        h-[min(560px,calc(100dvh-112px))]
        w-[min(380px,calc(100vw-32px))]
        flex-col overflow-hidden
        rounded-2xl border border-white/10
        bg-zinc-950 text-white
        shadow-2xl shadow-black/40
        animate-in fade-in slide-in-from-bottom-3 duration-200
      "
    >
      <ChatHeader onClose={onClose} />

      <div
        className="flex-1 space-y-5 overflow-y-auto overscroll-contain p-4"
        aria-live="polite"
      >
        {!hasMessages && (
          <div className="flex min-h-full flex-col justify-center gap-6">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-lime-300/20 bg-lime-300/10 text-lime-300">
                <Bot size={30} aria-hidden="true" />
              </div>

              <div className="mb-2 flex items-center justify-center gap-2">
                <h3 className="text-lg font-semibold tracking-tight">
                  Hey, welcome!
                </h3>

                <Sparkles
                  size={17}
                  className="text-lime-300"
                  aria-hidden="true"
                />
              </div>

              <p className="mx-auto max-w-[280px] text-sm leading-6 text-zinc-400">
                I'm Manish's AI assistant. Ask me about his projects,
                technical skills, education, or work experience.
              </p>
            </div>

            <SuggestedQuestions
              onSelect={onSendMessage}
              disabled={isLoading}
            />
          </div>
        )}

        {hasMessages && (
          <div className="space-y-5">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>
        )}

        {isLoading && (
          <div className="flex items-start gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-lime-300/20 bg-lime-300/10 text-lime-300">
              <Bot size={17} aria-hidden="true" />
            </div>

            <div
              className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-white/10 bg-zinc-900 px-4 py-3"
              role="status"
              aria-label="Manish's AI is thinking"
            >
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-lime-300 [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-lime-300 [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-lime-300" />
            </div>
          </div>
        )}

        {error && (
          <div
            role="alert"
            className="rounded-xl border border-red-400/20 bg-red-400/5 px-3 py-2.5 text-sm text-red-300"
          >
            {error}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <ChatInput
        onSendMessage={onSendMessage}
        isLoading={isLoading}
      />

      <p className="px-3 pb-3 text-center text-[10px] text-zinc-600">
        Powered by Gemini · Ask about Manish's portfolio
      </p>
    </section>
  );
}