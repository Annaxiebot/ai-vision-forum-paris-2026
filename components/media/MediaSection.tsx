"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";
import { EVENT_CONFIG } from "@/lib/constants";
import { AudioPlayer } from "./AudioPlayer";
import { VideoPlayer } from "./VideoPlayer";

type Lang = "en" | "zh";

const COPY: Record<
  Lang,
  {
    label: string;
    subtitle: string;
    copy: string;
    copied: string;
    videoBadge: string;
    audioBadge: string;
    langLabel: string;
  }
> = {
  en: {
    label: "English",
    subtitle: "Self-hosted videos and audio deep dives — copy any link to share.",
    copy: "Copy link",
    copied: "Copied",
    videoBadge: "VIDEO",
    audioBadge: "AUDIO",
    langLabel: "English",
  },
  zh: {
    label: "中文",
    subtitle: "自托管视频与深度音频 — 复制链接即可分享。",
    copy: "复制链接",
    copied: "已复制",
    videoBadge: "视频",
    audioBadge: "音频",
    langLabel: "中文",
  },
};

type MediaItem = {
  url: string;
  title: string;
  duration: string;
  size?: string;
  description?: string;
  featured?: boolean;
};

/** Resolve a relative /media/* path to an absolute, shareable URL. */
function absoluteUrl(path: string): string {
  if (typeof window === "undefined") return path;
  if (/^https?:/i.test(path)) return path;
  return new URL(path, window.location.origin).toString();
}

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through
  }
  try {
    const el = document.createElement("textarea");
    el.value = text;
    el.style.position = "fixed";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(el);
    return ok;
  } catch {
    return false;
  }
}

function CopyLinkButton({
  url,
  label,
  copiedLabel,
}: {
  url: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async (e) => {
        e.stopPropagation();
        e.preventDefault();
        const ok = await copyToClipboard(absoluteUrl(url));
        if (ok) {
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        }
      }}
      aria-label={label}
      title={copied ? copiedLabel : label}
      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-muted-foreground transition hover:border-primary hover:text-primary"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-primary" />
      ) : (
        <Link2 className="h-3.5 w-3.5" />
      )}
      <span>{copied ? copiedLabel : label}</span>
    </button>
  );
}

function ShareRow({
  url,
  copy,
}: {
  url: string;
  copy: (typeof COPY)[Lang];
}) {
  return (
    <div className="mt-4 flex items-center justify-end border-t border-border/60 pt-3">
      <CopyLinkButton url={url} label={copy.copy} copiedLabel={copy.copied} />
    </div>
  );
}

function MediaCard({
  item,
  kind,
  lang,
  copy,
}: {
  item: MediaItem;
  kind: "video" | "audio";
  lang: Lang;
  copy: (typeof COPY)[Lang];
}) {
  const badgeText = kind === "video" ? copy.videoBadge : copy.audioBadge;
  const metaParts = [badgeText, copy.langLabel, item.duration, item.size].filter(Boolean);

  return (
    <article className="rounded-2xl border border-border bg-card/40 p-5 shadow-sm">
      <header className="mb-4">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] ${
              kind === "video"
                ? "bg-primary/10 text-primary"
                : "bg-accent/15 text-accent-foreground"
            }`}
          >
            {badgeText}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
            {metaParts.slice(1).join(" · ")}
          </span>
          {item.featured && (
            <span className="ml-auto rounded-full border border-primary/30 bg-primary/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
              {lang === "en" ? "Featured" : "推荐"}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
        {item.description && (
          <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
        )}
      </header>

      {kind === "video" ? (
        <VideoPlayer
          src={item.url}
          poster={EVENT_CONFIG.recapPosterUrl}
          title={item.title}
        />
      ) : (
        <AudioPlayer
          src={item.url}
          title={item.title}
          durationLabel={item.duration}
        />
      )}

      <ShareRow url={item.url} copy={copy} />
    </article>
  );
}

export function MediaSection() {
  const [lang, setLang] = useState<Lang>("en");
  const pool = EVENT_CONFIG.media[lang];
  const copy = COPY[lang];

  return (
    <section className="container mx-auto max-w-5xl px-4 py-14" id="media">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Watch &amp; Listen
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{copy.subtitle}</p>
        </div>
        <div
          role="tablist"
          aria-label="Language"
          className="inline-flex rounded-full border border-border bg-card p-1 text-sm font-medium"
        >
          {(["en", "zh"] as const).map((l) => (
            <button
              key={l}
              role="tab"
              aria-selected={lang === l}
              onClick={() => setLang(l)}
              className={`rounded-full px-4 py-1.5 transition ${
                lang === l
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {COPY[l].label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {pool.videos.map((v) => (
          <MediaCard key={v.url} item={v} kind="video" lang={lang} copy={copy} />
        ))}
        {pool.audios.map((a) => (
          <MediaCard key={a.url} item={a} kind="audio" lang={lang} copy={copy} />
        ))}
      </div>
    </section>
  );
}
