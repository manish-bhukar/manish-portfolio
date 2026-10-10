
"use client";

import { ArrowUpRight, BriefcaseBusiness, Code2, UserRound } from "lucide-react";

import type { SuggestedQuestion } from "../../types/chatbot.types"

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
  disabled?: boolean;
}

const suggestedQuestions: SuggestedQuestion[] = [
  {
    label: "Explore my projects",
    question: "Tell me about Manish's projects.",
  },
  {
    label: "Tech stack",
    question: "What technologies does Manish work with?",
  },
  {
    label: "Work experience",
    question: "Tell me about Manish's experience at Flipkart and Cleartrip.",
  },
];

const icons = [Code2, BriefcaseBusiness, UserRound];

export default function SuggestedQuestions({
  onSelect,
  disabled = false,
}: SuggestedQuestionsProps) {
  return (
    <div className="w-full space-y-2">
      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
        Try asking
      </p>

      <div className="flex flex-col gap-2">
        {suggestedQuestions.map((item, index) => {
          const Icon = icons[index];

          return (
            <button
              key={item.label}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(item.question)}
              className="group flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-left transition hover:border-lime-300/30 hover:bg-lime-300/[0.06] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Icon
                size={17}
                className="shrink-0 text-lime-300"
                aria-hidden="true"
              />

              <span className="flex-1 text-sm text-zinc-300 transition group-hover:text-white">
                {item.label}
              </span>

              <ArrowUpRight
                size={15}
                className="shrink-0 text-zinc-500 transition group-hover:text-lime-300"
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
