
"use client";

import { useState, type FormEvent, type KeyboardEvent } from "react";
import { ArrowUp, LoaderCircle } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void | Promise<void>;
  isLoading: boolean;
}

export default function ChatInput({
  onSendMessage,
  isLoading,
}: ChatInputProps) {
  const [input, setInput] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = input.trim();

    if (!message || isLoading) return;

    setInput("");
    await onSendMessage(message);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-white/10 p-3"
    >
      <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-zinc-900 p-2 transition focus-within:border-lime-300/40">
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me about Manish..."
          aria-label="Type your message"
          rows={1}
          disabled={isLoading}
          className="max-h-28 min-h-10 flex-1 resize-none bg-transparent px-2 py-2.5 text-sm text-white outline-none placeholder:text-zinc-500 disabled:opacity-50"
        />

        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          aria-label="Send message"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-300 text-zinc-950 transition hover:bg-lime-200 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isLoading ? (
            <LoaderCircle size={19} className="animate-spin" />
          ) : (
            <ArrowUp size={20} />
          )}
        </button>
      </div>

      <p className="mt-2 text-center text-[11px] text-zinc-500">
        Enter to send · Shift + Enter for a new line
      </p>
    </form>
  );
}
