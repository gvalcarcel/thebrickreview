import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPriceCents(cents: number | null | undefined): string {
  if (cents == null) return "Consultar disponibilidad";
  const euros = cents / 100;
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(euros);
}

export function calculatePricePerPiece(cents: number | null | undefined, pieceCount: number | null | undefined): string | null {
  if (!cents || !pieceCount || pieceCount <= 0) return null;
  const eurosPerPiece = (cents / 100) / pieceCount;
  return `${eurosPerPiece.toFixed(2)} €/pieza`;
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}
