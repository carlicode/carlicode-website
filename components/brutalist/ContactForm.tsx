"use client";

import { useActionState } from "react";
import type { Dictionary } from "@/content/types";
import { submitContact, type FormState } from "@/app/actions";

const initial: FormState = { ok: false };

export function ContactForm({ dict }: { dict: Dictionary }) {
  const [state, formAction, pending] = useActionState(submitContact, initial);

  if (state.ok) {
    return (
      <p
        style={{
          margin: 0,
          fontSize: 16,
          lineHeight: 1.5,
          color: "rgba(255,255,255,0.7)",
          fontFamily: "var(--font-space-grotesk), ui-sans-serif, sans-serif",
        }}
      >
        {dict.contactThanks}
      </p>
    );
  }

  return (
    <form className="br-contact-form br-form" action={formAction}>
      <div className="br-form-row">
        <input
          name="name"
          placeholder={dict.contactName}
          autoComplete="name"
          aria-label={dict.contactName}
        />
        <input
          type="email"
          name="email"
          required
          placeholder={dict.contactEmail}
          autoComplete="email"
          aria-label={dict.contactEmail}
        />
      </div>
      <input
        name="company"
        placeholder={dict.contactCompany}
        autoComplete="organization"
        aria-label={dict.contactCompany}
      />
      <select name="type" defaultValue="" required aria-label={dict.contactType}>
        <option value="" disabled>
          {dict.contactType}
        </option>
        {dict.contactTypes.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <textarea
        name="message"
        placeholder={dict.contactMsg}
        rows={5}
        aria-label={dict.contactMsg}
      />
      {state.error === "email" ? (
        <p style={{ margin: 0, padding: "0 16px", color: "var(--pink)" }}>
          {dict.formInvalidEmail}
        </p>
      ) : null}
      <button className="br-form-send" type="submit" disabled={pending}>
        <span>{pending ? dict.formSending : dict.contactSend}</span>
        <span>→</span>
      </button>
    </form>
  );
}
