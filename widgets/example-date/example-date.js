export default function decorate(widget) {
  const now = new Date();
  const time = widget.querySelector('time');
  time.dateTime = now.toISOString();
  time.textContent = new Intl.DateTimeFormat(document.documentElement.lang || 'en', {
    dateStyle: 'long',
  }).format(now);
}
