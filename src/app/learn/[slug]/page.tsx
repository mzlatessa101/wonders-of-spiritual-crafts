import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categories,
  getAllCategorySlugs,
  getCategory,
} from "@/data/lessons";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cat = getCategory(params.slug);
  if (!cat) return { title: "Not found" };
  return {
    title: cat.name,
    description: cat.description,
  };
}

export default function CategoryPage({ params }: Props) {
  const cat = getCategory(params.slug);
  if (!cat) notFound();

  const others = categories.filter((c) => c.slug !== cat.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <nav className="text-xs text-mystic-400" aria-label="Breadcrumb">
        <Link href="/learn" className="hover:text-gold-300">
          Learn
        </Link>
        <span className="mx-2" aria-hidden>
          /
        </span>
        <span className="text-mystic-200">{cat.name}</span>
      </nav>

      <div className="mt-6 flex flex-wrap items-start gap-4">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/30 bg-midnight-800 text-2xl text-gold-400"
          aria-hidden
        >
          {cat.icon}
        </span>
        <div className="min-w-0 flex-1">
          <h1 className="font-display text-4xl text-moon md:text-5xl">
            {cat.name}
          </h1>
          <p className="mt-3 max-w-2xl text-mystic-200/80">{cat.description}</p>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <h2 className="font-display text-2xl text-gold-300">Sample lessons</h2>
        {cat.lessons.map((lesson, i) => (
          <article
            key={lesson.id}
            id={lesson.id}
            className="card scroll-mt-24"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs text-mystic-400">
              <span className="rounded-full bg-mystic-800/60 px-2 py-0.5 text-gold-400/90">
                Lesson {i + 1}
              </span>
              <span>{lesson.duration}</span>
              <span>·</span>
              <span>{lesson.level}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl text-moon">
              {lesson.title}
            </h3>
            <p className="mt-1 text-sm italic text-mystic-300/80">
              {lesson.summary}
            </p>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-mystic-100/85">
              {lesson.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="font-display text-xl text-moon">Continue exploring</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {others.map((c) => (
            <Link key={c.slug} href={`/learn/${c.slug}`} className="card block">
              <span className="text-gold-400" aria-hidden>
                {c.icon}
              </span>
              <p className="mt-1 font-medium text-moon">{c.name}</p>
            </Link>
          ))}
        </div>
        <Link href="/learn" className="btn-secondary mt-6 inline-flex !py-2 text-xs">
          ← Back to Learn hub
        </Link>
      </section>
    </div>
  );
}
