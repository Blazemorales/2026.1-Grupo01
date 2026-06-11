/** Input masks and validators for the appointment form. */

export function onlyDigits(value: string): string {
  return value.replace(/\D/g, "");
}

/** Formats a string as a Brazilian CPF: 999.999.999-99 */
export function maskCPF(value: string): string {
  const d = onlyDigits(value).slice(0, 11);
  return d
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

/** Formats a string as a Brazilian mobile phone: (99) 99999-9999 */
export function maskPhone(value: string): string {
  const d = onlyDigits(value).slice(0, 11);
  if (d.length <= 2) return d.replace(/(\d{0,2})/, "($1");
  if (d.length <= 7) return d.replace(/(\d{2})(\d{0,5})/, "($1) $2");
  return d.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

export function isValidCPF(value: string): boolean {
  return onlyDigits(value).length === 11;
}

export function isValidPhone(value: string): boolean {
  const len = onlyDigits(value).length;
  return len === 10 || len === 11;
}

/** Formats a string as a Brazilian voter registration ("título de eleitor"): 0000 0000 0000 */
export function maskTituloEleitor(value: string): string {
  const d = onlyDigits(value).slice(0, 12);
  return d.replace(/(\d{4})(\d)/, "$1 $2").replace(/(\d{4} \d{4})(\d)/, "$1 $2");
}

export function isValidTituloEleitor(value: string): boolean {
  return onlyDigits(value).length === 12;
}

/** Formats a string as a date: DD/MM/AAAA */
export function maskDate(value: string): string {
  const d = onlyDigits(value).slice(0, 8);
  return d.replace(/(\d{2})(\d)/, "$1/$2").replace(/(\d{2}\/\d{2})(\d)/, "$1/$2");
}

/** Validates a DD/MM/AAAA date string (real calendar date, year 1900–today). */
export function isValidDate(value: string): boolean {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value.trim());
  if (!m) return false;
  const day = Number(m[1]);
  const month = Number(m[2]);
  const year = Number(m[3]);
  if (month < 1 || month > 12) return false;
  const date = new Date(year, month - 1, day);
  const valid =
    date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
  return valid && year >= 1900 && date.getTime() <= Date.now();
}

/**
 * Formats a numeric string as Brazilian currency (no symbol): "1234567" -> "12.345,67".
 * Empty input becomes "0,00", mirroring the prototype's "R$" money fields.
 */
export function maskMoney(value: string): string {
  const digits = onlyDigits(value).replace(/^0+(?=\d)/, "");
  const padded = digits.padStart(3, "0");
  const cents = padded.slice(-2);
  const reais = padded.slice(0, -2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${reais},${cents}`;
}

/** Parses a masked currency string ("12.345,67") into a number (12345.67). */
export function parseMoney(value: string): number {
  const digits = onlyDigits(value);
  return digits ? Number(digits) / 100 : 0;
}

/** Formats a number as Brazilian currency with the R$ symbol: 1234.5 -> "R$ 1.234,50". */
export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
