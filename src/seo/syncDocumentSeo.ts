const SITE_NAME = "Stormflow";
const SITE_DESCRIPTION =
  "Collaborative brainstorming canvas—capture ideas, connect thoughts, and explore product thinking together.";

function resolveSiteOrigin(): string {
  const configured = import.meta.env.VITE_SITE_ORIGIN;
  if (typeof configured === "string" && configured.length > 0) {
    return configured.replace(/\/$/, "");
  }
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return "";
}

function upsertMeta(attributeName: "name" | "property", key: string, content: string) {
  const head = document.head;
  const selector = `meta[${attributeName}="${key}"]`;
  let element = head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, key);
    head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  const head = document.head;
  const selector = `link[rel="${rel}"]`;
  let element = head.querySelector<HTMLLinkElement>(selector);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function upsertJsonLd(data: Record<string, unknown>) {
  const head = document.head;
  const scriptId = "stormflow-jsonld";
  let element = head.querySelector<HTMLScriptElement>(`#${scriptId}`);
  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.id = scriptId;
    head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
}

export function syncDocumentSeo(pathname: string) {
  const origin = resolveSiteOrigin();
  const normalizedPath =
    pathname === "" || pathname === "/"
      ? "/"
      : pathname.startsWith("/")
        ? pathname
        : `/${pathname}`;
  const absoluteUrl =
    origin.length > 0 ? `${origin}${normalizedPath}` : normalizedPath;
  const title = SITE_NAME;
  const description = SITE_DESCRIPTION;
  const imageUrl =
    origin.length > 0 ? `${origin}/stormflow-logo.png` : "/stormflow-logo.png";

  document.title = title;

  upsertMeta("name", "description", description);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:site_name", SITE_NAME);
  upsertMeta("property", "og:url", absoluteUrl);
  upsertMeta("property", "og:image", imageUrl);
  upsertMeta("property", "og:image:alt", `${SITE_NAME} logo`);
  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:locale", "en_US");

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", imageUrl);

  if (origin.length > 0) {
    upsertLink("canonical", absoluteUrl);
  }

  upsertJsonLd({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    ...(origin.length > 0 ? { url: origin } : {}),
  });
}
