import { DmButton } from "@/components/dm-button";
import { Media } from "@/components/media";
import { defaultHeroCta, igDmUrl, site } from "@/lib/site";

function Ctas({ center }: { center?: boolean }) {
  const h = site.hero;
  const fallback = defaultHeroCta();
  return (
    <div className={`mt-8 flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
      {h.primaryCta ? (
        <a href={h.primaryCta.href} className="btn btn-primary">
          {h.primaryCta.label}
        </a>
      ) : fallback.kind === "link" ? (
        <a href={fallback.href} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          {fallback.label}
        </a>
      ) : (
        <DmButton href={igDmUrl} message={site.order.dmMessage} label={fallback.label} />
      )}
      {h.secondaryCta ? (
        <a href={h.secondaryCta.href} className="btn btn-ghost">
          {h.secondaryCta.label}
        </a>
      ) : null}
    </div>
  );
}

function Copy({ center, light }: { center?: boolean; light?: boolean }) {
  const h = site.hero;
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : ""}>
      {h.eyebrow ? <p className={light ? "eyebrow !text-white/85" : "eyebrow"}>{h.eyebrow}</p> : null}
      <h1 className={`mt-3 text-4xl leading-[1.05] tracking-tight sm:text-6xl ${light ? "!text-white" : ""}`}>{h.headline}</h1>
      {h.subhead ? (
        <p className={`mt-5 text-lg leading-8 ${light ? "text-white/90" : "text-muted"} ${center ? "mx-auto max-w-2xl" : "max-w-xl"}`}>{h.subhead}</p>
      ) : null}
      <Ctas center={center} />
    </div>
  );
}

export function Hero() {
  const h = site.hero;
  const imgs = h.images ?? [];
  const variant = h.variant ?? "split";

  if (variant === "full" && imgs[0]) {
    return (
      <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden">
        <Media img={imgs[0]} sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-32">
          <Copy light />
        </div>
      </section>
    );
  }

  if (variant === "centered") {
    return (
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Copy center />
        {imgs.length ? (
          <div className="mt-12 grid grid-cols-3 gap-3 md:gap-5">
            {imgs.slice(0, 3).map((img, i) => (
              <div key={img.src} className={`relative aspect-[4/5] overflow-hidden rounded-media bg-soft ${i === 1 ? "md:-translate-y-6" : ""}`}>
                <Media img={img} sizes="33vw" priority={i === 0} />
              </div>
            ))}
          </div>
        ) : null}
      </section>
    );
  }

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-10 md:grid-cols-[1.05fr_0.95fr] md:py-16">
      <Copy />
      {imgs.length ? (
        <div className="grid grid-cols-[1.4fr_1fr] gap-3">
          <div className={`relative overflow-hidden rounded-media bg-soft ${imgs.length > 1 ? "row-span-2 aspect-[4/5]" : "col-span-2 aspect-[4/5]"}`}>
            <Media img={imgs[0]} sizes="(min-width: 768px) 30vw, 60vw" priority />
          </div>
          {imgs.slice(1, 3).map((img) => (
            <div key={img.src} className="relative aspect-square overflow-hidden rounded-media bg-soft">
              <Media img={img} sizes="(min-width: 768px) 20vw, 40vw" />
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
