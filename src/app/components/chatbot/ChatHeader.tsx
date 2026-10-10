
"use client";

import { Bot, X } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
}

export default function ChatHeader({
  onClose,
}: ChatHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-white/10 px-4 py-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-lime-300/20 bg-lime-300/10 text-lime-300">
          <Bot size={24} aria-hidden="true" />
        </div>

        <div className="min-w-0">
          <h2 className="truncate text-sm font-semibold text-white">
            Ask Manish AI
          </h2>

          <div className="mt-1 flex items-center gap-1.5">
            <span
              className="h-2 w-2 rounded-full bg-lime-400"
              aria-hidden="true"
            />
            <p className="text-xs text-zinc-400">
              Portfolio assistant
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close chat window"
        className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300"
      >
        <X size={20} aria-hidden="true" />
      </button>
    </header>
  );
}
