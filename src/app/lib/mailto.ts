export function buildMailto({
  to = "kylakademininorr@gmail.com",
  cc = "WSutbildningar@gmail.com",
  subject,
  body,
}: {
  to?: string;
  cc?: string;
  subject: string;
  body: string;
}) {
  const params = new URLSearchParams({
    cc,
    subject,
    body,
  });
  return `mailto:${encodeURIComponent(to)}?${params.toString()}`;
}
