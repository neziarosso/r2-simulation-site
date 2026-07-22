"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "@/i18n/language-provider";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("request_failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-[color:var(--color-mist-dark)] bg-white px-4 py-3 text-sm text-[color:var(--color-ink)] placeholder:text-[color:var(--color-slate)]/60 transition-colors focus:border-[color:var(--color-cyan-500)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-cyan-500)]/25";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-[color:var(--color-navy-900)]">
            {t.contact.formName}
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-[color:var(--color-navy-900)]">
            {t.contact.formEmail}
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="company" className="text-sm font-medium text-[color:var(--color-navy-900)]">
          {t.contact.formCompany}
        </label>
        <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-[color:var(--color-navy-900)]">
          {t.contact.formMessage}
        </label>
        <textarea id="message" name="message" required rows={5} className={inputClass} />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-navy-900)] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? t.contact.formSubmitting : t.contact.formSubmit}
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          <CheckCircle2 size={18} />
          {t.contact.formSuccess}
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          <AlertCircle size={18} />
          {t.contact.formError}
        </p>
      )}
    </form>
  );
}
