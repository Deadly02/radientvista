// Small HTML -> Markdown converter for the server-rendered <main> of each page (llms-full.txt).
// Handles the markup our components produce: headings, paragraphs, lists, tables, links, bold.
const decode = (s) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/<!-- -->/g, "");

export function htmlToMarkdown(html, siteUrl) {
  let s = html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style|svg|iframe|form|button|noscript|select)\b[\s\S]*?<\/\1>/gi, "")
    .replace(/<img\b[^>]*>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n");

  // links -> [text](href)
  s = s.replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
    const t = text.replace(/<[^>]+>/g, "").trim();
    if (!t) return "";
    const url = href.startsWith("/") ? siteUrl + href : href;
    return url.startsWith("#") ? t : `[${t}](${url})`;
  });
  s = s.replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, t) => `**${t.trim()}**`);

  // tables
  s = s.replace(/<table\b[\s\S]*?<\/table>/gi, (table) => {
    const rows = [...table.matchAll(/<tr\b[\s\S]*?<\/tr>/gi)].map((r) =>
      [...r[0].matchAll(/<t[hd]\b[^>]*>([\s\S]*?)<\/t[hd]>/gi)].map((c) => c[1].replace(/<[^>]+>/g, "").trim())
    );
    if (!rows.length) return "";
    const head = `| ${rows[0].join(" | ")} |\n|${rows[0].map(() => "---").join("|")}|`;
    return `\n\n${head}\n${rows.slice(1).map((r) => `| ${r.join(" | ")} |`).join("\n")}\n\n`;
  });

  s = s
    .replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_, n, t) => `\n\n${"#".repeat(Number(n))} ${t.replace(/<[^>]+>/g, "").trim()}\n\n`)
    .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, (_, t) => `\n- ${t.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()}`)
    .replace(/<\/(p|div|section|ul|ol|address|nav|header|footer|caption)>/gi, "\n\n")
    .replace(/<[^>]+>/g, " ");

  return decode(s)
    .split("\n")
    .map((l) => l.replace(/[ \t]+/g, " ").trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
