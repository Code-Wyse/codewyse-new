"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const formatDate = (iso?: string) => {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
};

const estimateReadTime = (text?: string) => {
  if (!text) return "3 min read";
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(3, Math.round((words / 220) * 6));
  return `${minutes} min read`;
};

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata, slug, tags, publishedAt } = blog;
  const href = slug ? `/blog/${slug}/` : "/blog/blog-details/";
  const primaryTag = tags?.[0];

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stroke bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl dark:border-strokedark dark:bg-blacksection"
    >
      <Link
        href={href}
        className="relative block aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#3ba196] to-[#1a3d3a]"
      >
        {mainImage && (
          <Image
            src={mainImage}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {primaryTag && (
          <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1a3d3a] shadow-sm backdrop-blur">
            {primaryTag}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col px-6 py-6">
        <div className="mb-3 flex items-center gap-2 text-xs text-waterloo">
          {publishedAt && <span>{formatDate(publishedAt)}</span>}
          {publishedAt && <span aria-hidden>·</span>}
          <span>{estimateReadTime(metadata)}</span>
        </div>

        <h3 className="mb-3 line-clamp-2 text-lg font-semibold leading-snug text-black transition-colors duration-200 group-hover:text-primary dark:text-white xl:text-itemtitle2">
          <Link href={href}>{title}</Link>
        </h3>

        <p className="line-clamp-3 text-sm text-waterloo dark:text-gray-300">
          {metadata}
        </p>

        <div className="mt-auto pt-5">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-200 group-hover:gap-3 hover:text-primaryho"
          >
            Read article
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
              <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogItem;
