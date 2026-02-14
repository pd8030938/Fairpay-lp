"use client";

import { useState } from "react";
import { z } from "zod";
import { getEmailValidationError } from "@/lib/emailUtils";
import { EMAIL_MAX_LENGTH, NAME_MAX_LENGTH, NAME_MIN_LENGTH } from "@/lib/validators";
import { getNameValidationError, sanitizeName } from "@/lib/nameAssociation";

const WaitlistFormSchema = z
  .object({
    name: z.string().trim().min(NAME_MIN_LENGTH, `Nome deve ter ao menos ${NAME_MIN_LENGTH} caracteres`).max(NAME_MAX_LENGTH, `Nome muito longo (máx ${NAME_MAX_LENGTH})`),
    // Trim at field level; object-level superRefine will add specific errors
    email: z.string().trim().max(EMAIL_MAX_LENGTH, `Email muito longo (máx ${EMAIL_MAX_LENGTH})`),
    hp: z.string().optional()
  })
  .superRefine((data, ctx) => {
    // email format / TLD checks
    const eErr = getEmailValidationError(data.email);
    if (eErr) ctx.addIssue({ path: ["email"], code: "custom", message: eErr });

    // name validation (profanity / basic checks)
    const nameErr = getNameValidationError(data.name);
    if (nameErr) ctx.addIssue({ path: ["name"], code: "custom", message: nameErr });
  });

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setErrors({});

    const parsed = WaitlistFormSchema.safeParse({ name, email });
    if (!parsed.success) {
      const issues: any = {};
      parsed.error.issues.forEach((i) => {
        if (i.path?.[0] === "name") issues.name = i.message;
        if (i.path?.[0] === "email") issues.email = i.message;
      });
      setErrors(issues);
      return;
    }

    setLoading(true);

    try {
      // Sanitização cliente-side
      const cleanName = sanitizeName(name);
      const cleanEmail = email.trim().toLowerCase();

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: cleanName, email: cleanEmail, hp })
      });

      const body = await response.json();

      if (!response.ok) {
        // Surface server-side validation errors on the relevant field
        if (response.status === 400 && body?.error) {
          setErrors((prev) => ({ ...prev, email: body.error }));
          return;
        }
        if (response.status === 409) {
          setErrors((prev) => ({ ...prev, email: body?.error || 'Email já cadastrado' }));
          return;
        }
        setMessage(body?.error || "Erro ao enviar dados");
        return;
      }

      setMessage("✅ Bem-vindo à waitlist!");
      setName("");
      setEmail("");
      setHp("");
    } catch (error) {
      setMessage("❌ Erro ao se cadastrar. Tente novamente.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto bg-slate-50 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 font-poppins">Junte-se à Revolução</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
            maxLength={70}
            className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
          />

          {/* Honeypot field (hidden) */}
          <input
            type="text"
            name="hp"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            title="Honeypot field"
            aria-hidden="true"
          />
          {errors.name && <p className="text-red-500 text-sm mb-3">{errors.name}</p>}

          <input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            maxLength={150}
            className="w-full mb-6 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
          />
          {errors.email && <p className="text-red-500 text-sm mb-3">{errors.email}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
          >
            {loading ? "Enviando..." : "Se Cadastrar"}
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center font-semibold">{message}</p>
        )}
      </div>
    </section>
  );
}
