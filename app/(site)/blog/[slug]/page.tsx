import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { getAllPosts, getPostBySlug } from "@/lib/blogPosts";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

const categories = [
  { name: "Web Apps", href: "/blog/" },
  { name: "Mobile", href: "/blog/" },
  { name: "AI & ML", href: "/blog/" },
  { name: "CRM", href: "/blog/" },
  { name: "SaaS", href: "/blog/" },
  { name: "Fintech", href: "/blog/" },
  { name: "Healthcare", href: "/blog/" },
];

export function generateStaticParams() {
  return getAllPosts()
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug as string }));
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Article not found",
      robots: { index: false, follow: false },
    };
  }
  const url = `/blog/${post.slug}/`;
  return {
    title: `${post.title} | Codewyse Insights`,
    description: post.metadata,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metadata,
      url,
      type: "article",
      images: post.mainImage
        ? [{ url: post.mainImage, width: 1200, height: 630, alt: post.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metadata,
    },
  };
}

const formatDate = (iso?: string) => {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "";
  }
};

const mdxComponents = {
  a: (props: any) => <Link href={props.href ?? "#"} {...props} />,
};

const SITE_URL = "https://codewyse.io";

export default async function BlogSlugPage({ params }: any) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const primaryTag = post.tags?.[0];
  const isMdx = (post as any).source === "mdx" && typeof post.body === "string";
  const url = `${SITE_URL}/blog/${post.slug}/`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metadata,
    image: post.mainImage
      ? typeof post.mainImage === "string" && post.mainImage.startsWith("http")
        ? post.mainImage
        : `${SITE_URL}${post.mainImage}`
      : undefined,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author?.name || "Codewyse",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Codewyse",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.tags?.join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const hasFaqs = !!post.faqs?.length;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (post.faqs ?? []).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {hasFaqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e6f7f4] via-white to-white pt-35 pb-12 dark:from-blacksection dark:via-black dark:to-black md:pt-40">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
          <Link
            href="/blog/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-waterloo transition-colors hover:text-primary"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
              <path d="M3.523 7.833 7.993 12.303 6.815 13.482.333 7.000 6.815.518 7.993 1.697 3.523 6.167 13.667 6.167 13.667 7.833 3.523 7.833Z" />
            </svg>
            Back to blog
          </Link>

          {primaryTag && (
            <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[2px] text-primary">
              {primaryTag}
            </span>
          )}
          <h1 className="mb-5 max-w-4xl text-3xl font-bold leading-tight text-black dark:text-white md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          {post.metadata && (
            <p className="mb-6 max-w-3xl text-base text-waterloo dark:text-gray-300 md:text-lg">
              {post.metadata}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-waterloo">
            <span>
              <span className="font-medium text-black dark:text-white">By</span>{" "}
              Codewyse Team
            </span>
            {post.publishedAt && (
              <>
                <span aria-hidden>·</span>
                <span>{formatDate(post.publishedAt)}</span>
              </>
            )}
            {post.readTime && (
              <>
                <span aria-hidden>·</span>
                <span>{post.readTime}</span>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <aside className="lg:w-[32%]">
              <div className="mb-7 rounded-2xl border border-stroke bg-white p-4 shadow-sm dark:border-strokedark dark:bg-blacksection">
                <form action="/blog/" method="GET" role="search">
                  <div className="relative">
                    <input
                      type="search"
                      name="q"
                      placeholder="Search the blog..."
                      className="w-full rounded-xl border border-stroke bg-transparent px-5 py-3 pr-12 text-sm focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:text-white"
                    />
                    <button
                      type="submit"
                      aria-label="Search"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-waterloo transition-colors hover:text-primary"
                    >
                      <svg width="18" height="18" viewBox="0 0 21 21" fill="currentColor">
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <div className="mb-7 rounded-2xl border border-stroke bg-white p-7 shadow-sm dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-5 text-lg font-semibold text-black dark:text-white">
                  Categories
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <li key={c.name}>
                      <Link
                        href={c.href}
                        className="inline-flex items-center rounded-full border border-stroke bg-transparent px-3 py-1 text-xs font-medium text-black transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary dark:border-strokedark dark:text-white"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-7 rounded-2xl bg-gradient-to-br from-[#3ba196] to-[#1a3d3a] p-7 text-white shadow-sm">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-white/80">
                  Free for new clients
                </p>
                <h4 className="mb-2 text-xl font-bold">
                  Get a 1-Hour Free Consultation
                </h4>
                <p className="mb-5 text-sm text-white/85">
                  Talk to a senior engineer about your web, mobile, AI &amp; ML
                  or CRM project — no strings attached.
                </p>
                <Link
                  href="/support/"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#1a3d3a] transition hover:bg-white/90"
                >
                  Book a call
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" />
                  </svg>
                </Link>
              </div>

              <RelatedPost />
            </aside>

            <article className="lg:w-2/3">
              <div className="rounded-2xl border border-stroke bg-white p-6 shadow-sm dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 overflow-hidden rounded-xl">
                  <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-[#3ba196] to-[#1a3d3a]">
                    {post.mainImage && (
                      <Image
                        src={post.mainImage}
                        alt={post.title}
                        fill
                        className="object-cover opacity-90"
                      />
                    )}
                  </div>
                </div>

                <div className="blog-details prose prose-lg max-w-none dark:prose-invert">
                  {isMdx ? (
                    <MDXRemote
                      source={post.body as string}
                      components={mdxComponents}
                    />
                  ) : (
                    post.body ?? (
                      <p>
                        Full article coming soon. In the meantime,{" "}
                        <Link href="/support/">book a free consultation</Link>{" "}
                        to talk through this topic with a Codewyse engineer.
                      </p>
                    )
                  )}
                </div>

                {post.faqs && post.faqs.length > 0 && (
                  <section className="mt-12 border-t border-stroke pt-10 dark:border-strokedark">
                    <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {post.faqs.map((f, i) => (
                        <details
                          key={i}
                          className="group rounded-xl border border-stroke bg-white p-5 transition-colors open:border-primary/40 dark:border-strokedark dark:bg-blacksection"
                        >
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-black dark:text-white">
                            <span>{f.q}</span>
                            <svg
                              className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-45"
                              viewBox="0 0 24 24"
                              fill="none"
                              aria-hidden
                            >
                              <path
                                d="M12 5v14M5 12h14"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </summary>
                          <p className="mt-3 text-sm leading-relaxed text-waterloo dark:text-gray-300">
                            {f.a}
                          </p>
                        </details>
                      ))}
                    </div>
                  </section>
                )}

                <SharePost />
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
