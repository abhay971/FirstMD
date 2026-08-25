/**
 * Article page — /resources/articles/:slug (Figma node 510:284).
 * Layout: title + meta → hero photo → body sections split by hairlines →
 * "More articles" card rail → navy CTA banner → footer. Content comes from
 * ./articles; the CTA copy is each article's own closing section.
 */
import { useEffect } from 'react'
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
    <article className="flex w-[280px] shrink-0 snap-start flex-col gap-4 sm:w-[340px] lg:w-[405px]">
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
      <div className="flex flex-col gap-4 text-navy">
        <div className="flex flex-col">
          <h3 className="font-poppins text-xl font-bold leading-[1.5] lg:text-2xl">{article.title}</h3>
          <p className="font-poppins text-base leading-[1.5] opacity-60 lg:text-xl">{article.summary}</p>
        </div>
        <a href={articleHref(article)} className="group inline-flex items-center gap-2 font-poppins text-lg lg:text-2xl">
          <span className="group-hover:underline">Read Article</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">{ARROW}</span>
        </a>
      </div>
    </article>
  )
}

/** Horizontal, snap-scrolling rail of article cards; `exclude` hides the current article. */
export function ArticleRail({ exclude, heading }: { exclude?: string; heading?: string }) {
  const list = ARTICLES.filter((a) => a.slug !== exclude)
  return (
    <section className="relative overflow-hidden bg-page">
      <Reveal>
        {heading && (
          <Container className="pt-14 lg:pt-20">
            <h2 className="font-poppins text-[34px] font-bold leading-[1.1] text-navy lg:text-[60px]">{heading}</h2>
          </Container>
        )}
        <div
          className={`no-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-14 lg:gap-11 lg:pb-16 lg:pl-[max(2rem,calc((100vw-1272px)/2))] ${
            heading ? 'pt-8 lg:pt-12' : 'pt-14 lg:pt-16'
          }`}
        >
          {list.map((a) => (
            <ArticleCard key={a.slug} article={a} />
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
      <h2 className="font-poppins text-xl font-bold leading-[1.3] text-navy lg:text-2xl">{heading}</h2>
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
    <Container className="pb-12 pt-4 lg:pb-16">
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
            <h2 className="font-poppins text-2xl font-bold lg:text-[32px]">{cta.heading}</h2>
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
        <Container className="pt-32 lg:pt-44">
          <div className="hero-rise flex flex-col gap-2 text-navy">
            <h1 className="max-w-[1100px] font-poppins text-[34px] font-bold leading-[1.15] sm:text-[44px] lg:text-[56px] lg:leading-[1.4] xl:text-[64px]">
              {article.title}
            </h1>
            <p className="font-poppins text-lg font-bold opacity-60 lg:text-2xl">
              Category: {article.category}
              <span className="mx-3 lg:mx-4">|</span>
              Reading Time: {article.readingTime}
            </p>
          </div>
          <div className="hero-rise mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#d9d9d9] lg:mt-14 lg:aspect-[1271/469]">
            {article.image && <img src={article.image} alt="" className="h-full w-full object-cover" />}
          </div>
        </Container>

        {/* Body */}
        <Container className="pt-12 lg:pt-14">
          <Reveal className="flex flex-col gap-8 divide-y divide-navy/20 [&>section+section]:pt-8">
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
