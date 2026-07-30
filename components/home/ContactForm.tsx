"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContactForm, type ContactFormState } from "@/lib/actions/contact";
import { contactContent } from "@/content/contact";

const initialState: ContactFormState = { status: "idle" };

const inputClasses =
  "w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-accent">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form ref={formRef} action={formAction} noValidate className="flex flex-col gap-5">
      {/* Honeypot — hidden from sighted and assistive users, catches simple bots */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={Boolean(state.errors?.name)}
          aria-describedby={state.errors?.name ? "contact-name-error" : undefined}
          className={`mt-2 ${inputClasses}`}
        />
        <FieldError id="contact-name-error" message={state.errors?.name} />
      </div>

      <div>
        <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(state.errors?.email)}
          aria-describedby={state.errors?.email ? "contact-email-error" : undefined}
          className={`mt-2 ${inputClasses}`}
        />
        <FieldError id="contact-email-error" message={state.errors?.email} />
      </div>

      <div>
        <label htmlFor="contact-topic" className="text-sm font-medium text-foreground">
          Topic
        </label>
        <select
          id="contact-topic"
          name="topic"
          required
          defaultValue=""
          aria-invalid={Boolean(state.errors?.topic)}
          aria-describedby={state.errors?.topic ? "contact-topic-error" : undefined}
          className={`mt-2 ${inputClasses}`}
        >
          <option value="" disabled>
            Choose a topic
          </option>
          {contactContent.topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
        <FieldError id="contact-topic-error" message={state.errors?.topic} />
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "contact-message-error" : undefined}
          className={`mt-2 ${inputClasses}`}
        />
        <FieldError id="contact-message-error" message={state.errors?.message} />
      </div>

      <div
        role={state.status === "error" ? "alert" : "status"}
        aria-live="polite"
        className={
          state.status === "success"
            ? "rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary"
            : state.status === "error"
              ? "rounded-md border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent"
              : "sr-only"
        }
      >
        {state.message}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors duration-200 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isPending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
