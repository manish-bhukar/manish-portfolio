"use client";

import { MessageCircle, X } from "lucide-react";

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function ChatButton({
  isOpen,
  onClick,
}: ChatButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close chat" : "Open Ask Manish AI"}
      aria-expanded={isOpen}
      className="
        flex h-14 w-14 items-center justify-center
        rounded-full border border-lime-300/30
        bg-lime-300 text-zinc-950
        shadow-lg shadow-lime-400/20
        transition-all duration-300
        hover:scale-105 hover:bg-lime-200
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-lime-300
        focus-visible:ring-offset-2
        focus-visible:ring-offset-zinc-950
      "
    >
      {isOpen ? (
        <X size={24} aria-hidden="true" />
      ) : (
        <MessageCircle size={24} aria-hidden="true" />
      )}
    </button>
  );
}
