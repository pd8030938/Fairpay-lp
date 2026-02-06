"use client";

import { useState } from "react";
import { Button, Input } from "./ui";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar dados");
      }

      setMessage("✅ Bem-vindo à waitlist!");
      setName("");
      setEmail("");
    } catch (error) {
      setMessage("❌ Erro ao se cadastrar. Tente novamente.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Junte-se à Revolução</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4"
          />
          <Input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-6"
          />
          <Button
            className="w-full"
            onClick={() => handleSubmit({ preventDefault: () => {} } as any)}
          >
            {loading ? "Enviando..." : "Se Cadastrar"}
          </Button>
        </form>
        {message && (
          <p className="mt-4 text-center font-semibold">{message}</p>
        )}
      </div>
    </section>
  );
}
