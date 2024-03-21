import dayjs from "dayjs";

export default function checkForIOS() {
  if (navigator.standalone) return false;

  const now = dayjs().toString();
  const lastPrompt = localStorage.getItem(`installPrompt`);
  const days = dayjs().diff(lastPrompt, `day`);

  const ua = window.navigator.userAgent;
  const webkit = !!ua.match(/WebKit/i);
  const isIPad = !!ua.match(/iPad/i);
  const isIPhone = !!ua.match(/iPhone/i);
  const isIOS = isIPad || isIPhone;
  const isSafari = isIOS && webkit && !ua.match(/CriOS/i);
  const prompt = isIOS && isSafari && (Number.isNaN(days) || days > 30);

  if (prompt && `localStorage` in window) {
    localStorage.setItem(`installPrompt`, now);
  }

  return prompt;
}
