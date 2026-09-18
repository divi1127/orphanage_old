export const WHATSAPP_NUMBER = '919597715551';

export function openWhatsApp(message, phone = WHATSAPP_NUMBER) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function buildLines(lines) {
  return lines.filter((l) => (l || '').trim() !== '').join('\n');
}