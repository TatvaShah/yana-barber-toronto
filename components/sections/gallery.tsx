import Image from "next/image";
import { SectionHead } from "@/components/media";
import { has, site } from "@/lib/site";

export function Gallery() {
  const g = site.gallery;
  if (!g || !has(g.items)) return null;
  return (
    <section id="gallery" className="scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHead eyebrow="Gallery" title={g.title ?? "Recent work"} intro={g.intro} />
        <div className="mt-10 columns-2 gap-3 md:columns-3 md:gap-5">
          {g.items.map((it) => {
            const img = (
              <Image
                src={it.src}
                alt={it.alt}
                width={it.width ?? 1200}
                height={it.height ?? 1500}
                sizes="(min-width: 768px) 33vw, 50vw"
                className="h-auto w-full rounded-media bg-soft object-cover"
              />
            );
            return (
              <figure key={it.src} className="mb-3 break-inside-avoid md:mb-5">
                {it.href ? (
                  <a href={it.href} target="_blank" rel="noopener noreferrer">
                    {img}
                  </a>
                ) : (
                  img
                )}
                {it.caption ? <figcaption className="px-1 pt-2 text-sm text-muted">{it.caption}</figcaption> : null}
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
