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
