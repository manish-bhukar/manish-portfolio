"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-[28px]
        border border-white/10
        bg-[#080b0c]
        p-6
        sm:p-8
      "
    >
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm text-gray-400"
          >
            Name
          </label>

          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(event) =>
              setForm({
                ...form,
                name: event.target.value,
              })
            }
            placeholder="Your name"
            className="
              w-full
              rounded-xl
              border border-white/10
              bg-black/30
              px-4 py-3
              text-sm text-white
              outline-none
              placeholder:text-gray-700
              transition-all
              focus:border-lime-400/50
              focus:ring-1
              focus:ring-lime-400/20
            "
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm text-gray-400"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(event) =>
              setForm({
                ...form,
                email: event.target.value,
              })
            }
            placeholder="you@example.com"
            className="
              w-full
              rounded-xl
              border border-white/10
              bg-black/30
              px-4 py-3
              text-sm text-white
              outline-none
              placeholder:text-gray-700
              transition-all
              focus:border-lime-400/50
              focus:ring-1
              focus:ring-lime-400/20
            "
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm text-gray-400"
          >
            Message
          </label>

          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={(event) =>
              setForm({
                ...form,
                message: event.target.value,
              })
            }
            placeholder="Tell me what you're working on..."
            className="
              w-full
              resize-none
              rounded-xl
              border border-white/10
              bg-black/30
              px-4 py-3
              text-sm text-white
              outline-none
              placeholder:text-gray-700
              transition-all
              focus:border-lime-400/50
              focus:ring-1
              focus:ring-lime-400/20
            "
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="
            group
            flex w-full
            items-center justify-center
            gap-3
            rounded-xl
            bg-lime-400
            px-6 py-3.5
            font-semibold
            text-black
            transition-all duration-300
            hover:bg-lime-300
            hover:shadow-[0_0_30px_rgba(163,230,53,0.2)]
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {status === "loading" ? (
            <>
              <Loader2
                size={18}
                className="animate-spin"
              />

              Sending...
            </>
          ) : (
            <>
              Send Message

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </>
          )}
        </button>

        {/* Status */}
        {status === "success" && (
          <p className="text-center text-sm text-lime-400">
            ✓ Message sent successfully. I'll get back
            to you soon.
          </p>
        )}

        {status === "error" && (
          <p className="text-center text-sm text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}