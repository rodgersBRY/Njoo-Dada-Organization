"use server";

import { headers } from "next/headers";

export type ContactFieldErrors = Partial<
  Record<"name" | "email" | "topic" | "message", string>
>;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: ContactFieldErrors;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 30_000;

const lastSubmissionByClient = new Map<string, number>();

async function getClientKey(): Promise<string> {
  const headerList = await headers();
  return (
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerList.get("x-real-ip") ??
    "unknown"
  );
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: real users never see or fill this field. Bots that fill every
  // field trip it. Report success without processing to avoid tipping them off.
  if (String(formData.get("company") ?? "").trim().length > 0) {
    return { status: "success", message: "Thanks for reaching out." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: ContactFieldErrors = {};
  if (!name) errors.name = "Enter your name.";
  if (!email) errors.email = "Enter your email address.";
  else if (!EMAIL_PATTERN.test(email))
    errors.email = "Enter a valid email address.";
  if (!topic) errors.topic = "Choose a topic.";
  if (!message) errors.message = "Enter a message.";
  else if (message.length < 10)
    errors.message = "Message should be at least 10 characters.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, message: "Please fix the fields below." };
  }

  const clientKey = await getClientKey();
  const lastSubmission = lastSubmissionByClient.get(clientKey);
  const now = Date.now();
  if (lastSubmission && now - lastSubmission < RATE_LIMIT_WINDOW_MS) {
    return {
      status: "error",
      message:
        "You're submitting too quickly. Please wait a moment and try again.",
    };
  }
  lastSubmissionByClient.set(clientKey, now);

  // TODO: wire up real delivery once Njoo Dada provides credentials and a destination inbox.
  console.log("[contact-form] New submission", { name, email, topic, message });

  return {
    status: "success",
    message:
      "Thanks — your message has been received. We'll get back to you soon.",
  };
}
