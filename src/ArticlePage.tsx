/**
 * Article page — /resources/articles/:slug (Figma node 510:284).
 * Layout: title + meta → hero photo → body sections split by hairlines →
 * "More articles" card rail → navy CTA banner → footer. Content comes from
 * ./articles; the CTA copy is each article's own closing section.
 */
import { useEffect, useRef } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {
  ARROW,
  BOOK,
  Container,
  Footer,
  Navbar,
  PHONE_DISPLAY,
  PHONE_HREF,
  PillButton,
  Reveal,
} from './shared'
import { ARTICLES, articleBySlug, articleHref, type Article, type ArticleBlock } from './articles'

/* ----------------------------------------------------------------------------
 * Article cards — shared with the Resources page rail
 * ------------------------------------------------------------------------- */

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="flex w-[240px] shrink-0 flex-col gap-3 sm:w-[280px] lg:w-[340px] lg:gap-4">
      <a href={articleHref(article)} className="block aspect-square w-full overflow-hidden rounded-2xl bg-[#d9d9d9]">
        {article.image && (
          <img
            loading="lazy"
            src={article.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        )}
      </a>
      <div className="flex flex-col gap-3 text-navy lg:gap-4">
        <div className="flex flex-col">
          <h3 className="font-poppins text-lg font-bold leading-[1.4] lg:text-xl">{article.title}</h3>
          <p className="font-poppins text-sm leading-[1.5] opacity-60 lg:text-base">{article.summary}</p>
        </div>
        <a href={articleHref(article)} className="group inline-flex items-center gap-2 font-poppins text-base lg:text-lg">
          <span className="group-hover:underline">Read Article</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">{ARROW}</span>
        </a>
      </div>
    </article>
  )
}

/**
 * Infinite article rail. The list is rendered twice inside a normal horizontal
 * scroller; a rAF loop nudges scrollLeft and wraps it by one copy's width, so
 * it glides forever, pauses on hover/touch, and still scrolls by hand in either
 * direction without ever hitting an end. `exclude` hides the current article.
 */
const RAIL_SPEED = 40 // px per second

export function ArticleRail({ exclude, heading }: { exclude?: string; heading?: string }) {
  const list = ARTICLES.filter((a) => a.slug !== exclude)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let paused = false
    let raf = 0
    let last = performance.now()
    const half = () => el.scrollWidth / 2

    // Keep scrollLeft inside [0, half) so both auto-glide and manual scrolling wrap seamlessly.
    const wrap = () => {
      const h = half()
      if (h <= 0) return
      if (el.scrollLeft >= h) el.scrollLeft -= h
      else if (el.scrollLeft <= 0) el.scrollLeft += h
    }
    const tick = (now: number) => {
      const dt = Math.min(now - last, 100) / 1000
      last = now
      if (!paused && !reduceMotion) el.scrollLeft += RAIL_SPEED * dt
      wrap()
      raf = requestAnimationFrame(tick)
    }
    const pause = () => (paused = true)
    const resume = () => (paused = false)

    el.scrollLeft = 1 // start just inside the first copy so scrolling left can wrap
    raf = requestAnimationFrame(tick)
    el.addEventListener('scroll', wrap, { passive: true })
    el.addEventListener('pointerenter', pause)
    el.addEventListener('pointerleave', resume)
    el.addEventListener('touchstart', pause, { passive: true })
    el.addEventListener('touchend', resume)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('scroll', wrap)
      el.removeEventListener('pointerenter', pause)
      el.removeEventListener('pointerleave', resume)
      el.removeEventListener('touchstart', pause)
      el.removeEventListener('touchend', resume)
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-page">
      <Reveal>
        {heading && (
          <Container className="pt-10 lg:pt-20">
            <h2 className="font-poppins text-[28px] font-bold leading-[1.1] text-navy sm:text-[34px] lg:text-[44px]">{heading}</h2>
          </Container>
        )}
        <div
          ref={ref}
          className={`no-scrollbar flex overflow-x-auto pb-10 lg:pb-16 ${heading ? 'pt-6 lg:pt-12' : 'pt-10 lg:pt-16'}`}
        >
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 gap-5 pr-5 lg:gap-10 lg:pr-10">
              {list.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * Body blocks
 * ------------------------------------------------------------------------- */

const BODY = 'font-poppins text-base leading-[1.6] text-navy'

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case 'p':
      return <p className={BODY}>{block.text}</p>
    case 'list':
      return (
        <ul className={`${BODY} list-disc pl-6`}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'items':
      return (
        <div className="flex flex-col gap-4">
          {block.items.map((item) => (
            <div key={item.title}>
              <p className={`${BODY} font-bold`}>{item.title}</p>
              <p className={BODY}>{item.desc}</p>
            </div>
          ))}
        </div>
      )
  }
}

function Section({ heading, blocks }: Article['intro']) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-poppins text-lg font-bold leading-[1.3] text-navy lg:text-2xl">{heading}</h2>
      <div className="flex flex-col gap-4">
        {blocks.map((b, i) => (
          <Block key={i} block={b} />
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------------------
 * CTA banner — navy card with rings, article-specific copy
 * ------------------------------------------------------------------------- */

function ArticleCta({ cta }: { cta: Article['cta'] }) {
  return (
    <Container className="pb-10 pt-2 lg:pb-16 lg:pt-4">
      <Reveal>
        <div className="relative rounded-3xl bg-navy px-6 py-9 text-white shadow-[0px_16px_32px_rgba(0,0,0,0.12)] lg:min-h-[280px] lg:px-14 lg:py-12">
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
            <img
              aria-hidden
              alt=""
              src="/assets/need-graphic.svg"
              style={{ right: '-133px', top: '50%', transform: 'translateY(-50%)' }}
              className="absolute hidden w-[790px] max-w-none select-none md:block"
            />
          </div>
          <div className="relative z-10 max-w-[688px]">
            <h2 className="font-poppins text-xl font-bold sm:text-2xl lg:text-[32px]">{cta.heading}</h2>
            <p className="mt-2 font-poppins text-base text-white/60 lg:text-lg">{cta.text}</p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <PillButton variant="accent" href={BOOK} className="!text-base lg:!text-lg">
                Book Appointment
              </PillButton>
              <a href={PHONE_HREF} className="font-poppins text-lg font-bold text-white hover:underline lg:text-xl">
                Call: {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
            style={{ clipPath: 'inset(-300px 0px 0px 0px round 24px)' }}
          >
            <img loading="lazy" src="/assets/res-cta-doctor.webp" alt="" className="absolute bottom-0 right-12 h-[380px] w-auto" />
          </div>
        </div>
      </Reveal>
    </Container>
  )
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

export default function ArticlePage() {
  const { slug = '' } = useParams()
  const article = articleBySlug(slug)

  useEffect(() => {
    if (article) document.title = `${article.title} | First MD`
    return () => {
      document.title = 'First MD'
    }
  }, [article])

  if (!article) return <Navigate to="/resources" replace />

  return (
    <div className="min-h-screen bg-page">
      <Navbar />
      <main>
        {/* Title + meta + hero photo */}
        <Container className="pt-28 lg:pt-40">
          <div className="hero-rise flex flex-col gap-2 text-navy">
            <h1 className="max-w-[1000px] font-poppins text-[28px] font-bold leading-[1.15] sm:text-[36px] lg:text-[40px] lg:leading-[1.25] xl:text-[48px]">
              {article.title}
            </h1>
            <p className="font-poppins text-base font-bold opacity-60 lg:text-lg">
              Category: {article.category}
              <span className="mx-3 lg:mx-4">|</span>
              Reading Time: {article.readingTime}
            </p>
          </div>
          <div className="hero-rise mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#d9d9d9] lg:mt-14 lg:aspect-[1271/469]">
            {article.image && <img src={article.image} alt="" className="h-full w-full object-cover" />}
          </div>
        </Container>

        {/* Body */}
        <Container className="pt-10 lg:pt-14">
          <Reveal className="flex flex-col gap-6 lg:gap-8 [&>section+section]:border-t [&>section+section]:border-navy/20 [&>section+section]:pt-6 lg:[&>section+section]:pt-8">
            <Section {...article.intro} />
            {article.sections.map((s) => (
              <Section key={s.heading} {...s} />
            ))}
          </Reveal>
        </Container>

        <ArticleRail exclude={article.slug} heading="More articles" />
        <ArticleCta cta={article.cta} />
      </main>
      <Footer />
    </div>
  )
}
