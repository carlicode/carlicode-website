"use client";

import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import { useState } from "react";

export function MinimalContact({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mrbqpbqb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("idle");
        alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
      }
    } catch (error) {
      setStatus("idle");
      alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
    }
  };

  return (
    <section className="min-contact" id="contact">
      <div className="min-container">
        <div className="min-contact-grid">
          <div className="min-contact-info">
            <h2 className="min-section-title">{dict.contactTitle}</h2>
            <p className="min-contact-sub">{dict.contactSub}</p>
            
            <div className="min-contact-direct">
              <a href="mailto:carli.f.roman@gmail.com" className="min-contact-email">
                carli.f.roman@gmail.com
              </a>
              <div className="min-contact-social">
                <a href="https://tiktok.com/@carli.code" target="_blank" rel="noopener noreferrer">
                  TikTok
                </a>
                <a href="https://linkedin.com/in/carlicode" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://github.com/carlicode" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          
          <form className="min-contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={dict.contactName}
              required
              disabled={status === "sending"}
            />
            <input
              type="email"
              name="email"
              placeholder={dict.contactEmail}
              required
              disabled={status === "sending"}
            />
            <input
              type="text"
              name="company"
              placeholder={dict.contactCompany}
              disabled={status === "sending"}
            />
            <select name="type" required disabled={status === "sending"}>
              <option value="">{dict.contactType}</option>
              {dict.contactTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder={dict.contactMsg}
              rows={5}
              required
              disabled={status === "sending"}
            />
            <button
              type="submit"
              className="min-btn min-btn-primary min-btn-full"
              disabled={status === "sending"}
            >
              {status === "sending" ? dict.formSending :
               status === "sent" ? dict.contactThanks :
               dict.contactSend}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
