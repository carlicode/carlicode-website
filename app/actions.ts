"use server";

export type FormState = { ok: boolean; error?: string };

export async function submitNewsletter(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = formData.get("email");
  const name = formData.get("name");
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return { ok: false, error: "email" };
  }
  void name;
  // Wire to Resend / Formspree / API when ready
  console.info("[newsletter]", { name, email });
  return { ok: true };
}

export async function submitContact(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = formData.get("email");
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return { ok: false, error: "email" };
  }
  const payload = {
    name: formData.get("name"),
    company: formData.get("company"),
    type: formData.get("type"),
    message: formData.get("message"),
    email,
  };
  console.info("[contact]", payload);
  return { ok: true };
}
