"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatus("success");

      setFormData({
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
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-white outline-none transition focus:border-lime-400/50"
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
          className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-white outline-none transition focus:border-lime-400/50"
        />
      </div>

      {/* Message */}
      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Message
        </label>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me what you're working on..."
          required
          rows={6}
          className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-white outline-none transition focus:border-lime-400/50"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-2xl bg-lime-400 px-6 py-4 font-semibold text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending"
          ? "Sending..."
          : status === "success"
            ? "Message Sent ✓"
            : "Send Message →"}
      </button>

      {/* Status */}
      {status === "success" && (
        <p className="text-center text-sm text-lime-400">
          Thanks! Your message has been sent successfully.
        </p>
      )}

      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}