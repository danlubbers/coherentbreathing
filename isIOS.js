const ua = window.navigator.userAgent;
const webkit = !!ua.match(/WebKit/i);
const isIPad = !!ua.match(/iPad/i);
const isIPhone = !!ua.match(/iPhone/i);
const isIOS = isIPad || isIPhone;
const isSafari = isIOS && webkit && !ua.match(/CriOS/i);
const prompt = isIOS && isSafari;

console.log("isIOS", isIOS);

if (prompt && `localStorage` in window) {
  localStorage.setItem(`installPrompt`, "isModal");
}
