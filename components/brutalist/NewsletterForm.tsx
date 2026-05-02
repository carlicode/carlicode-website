"use client";

import { useActionState } from "react";
import type { Dictionary } from "@/content/types";
import { submitNewsletter, type FormState } from "@/app/actions";

const initial: FormState = { ok: false };

export function NewsletterForm({ dict }: { dict: Dictionary }) {
  const [state, formAction, pending] = useActionState(
    submitNewsletter,
    initial,
  );

  if (state.ok) {
    return (
      <p className="br-news-text" style={{ margin: 0 }}>
        {dict.newsletterThanks}
      </p>
    );
  }

  return (
    <form
      action={formAction}
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      <input
        className="br-news-input"
        type="text"
        name="name"
        placeholder={dict.newsletterNamePh}
        autoComplete="name"
        aria-label={dict.newsletterNamePh}
      />
      <input
        className="br-news-input"
        type="email"
        name="email"
        required
        placeholder={dict.newsletterPh}
        autoComplete="email"
        aria-label={dict.newsletterPh}
      />
      {state.error === "email" ? (
        <p className="br-news-text" style={{ margin: 0, fontSize: 14 }}>
          {dict.formInvalidEmail}
        </p>
      ) : null}
      <button className="br-news-cta" type="submit" disabled={pending}>
        {pending ? dict.formSending : `${dict.newsletterCta} →`}
      </button>
    </form>
  );
}
