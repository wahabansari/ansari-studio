"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "error";

/** Posts a lead form to its API route and moves to the thank-you page on success. */
export function useLeadForm(endpoint: "/api/contact" | "/api/audit") {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(endpoint, { method: "POST", body: new FormData(event.currentTarget) });
      if (response.ok || response.status === 303) {
        router.push("/contact/thank-you");
        return;
      }
      if (response.status === 429) {
        setErrorMessage(
          "Too many messages from this connection. Please try again later, or email us directly.",
        );
      } else if (response.status === 400) {
        const text = await response.text();
        const lines = text.replace("Please go back and fix the form:", "").trim();
        setErrorMessage(lines || "Please check the form and try again.");
      } else {
        setErrorMessage("Something went wrong sending your message. You can also email us directly.");
      }
    } catch {
      setErrorMessage("Could not reach the server. Check your connection and try again.");
    }
    setStatus("error");
  }

  return { handleSubmit, isSending: status === "sending", errorMessage };
}
