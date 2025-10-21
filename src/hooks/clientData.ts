// src/hooks/clientData.ts
import { useMutation } from "@tanstack/react-query";

const endpoint = "https://uxgroup-brevo-api.vercel.app/api/brevo/lead";


export function useClientData() {
  return useMutation({
    mutationFn: async (payload: any) => {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.text().catch(() => "");
        throw new Error(err || "Falha ao enviar lead");
      }
      return res.json().catch(() => ({}));
    },
  });
}
