import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";

const RelatedPost = async () => {
  return (
    <div className="rounded-2xl border border-stroke bg-white p-7 shadow-sm dark:border-strokedark dark:bg-blacksection">
      <h4 className="mb-6 text-lg font-semibold text-black dark:text-white">
        Related Posts
      </h4>

      <ul className="space-y-5">
        {BlogData.slice(0, 3).map((post) => {
          const href = post.slug ? `/blog/${post.slug}/` : "/blog/blog-details/";
          return (
            <li key={post._id}>
              <Link
                href={href}
                className="group flex items-start gap-4 rounded-xl p-2 transition-colors hover:bg-primary/5"
              >
                <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-[#3ba196] to-[#1a3d3a]">
                  {post.mainImage && (
                    <Image
                      src={post.mainImage}
                      alt={post.title}
                      fill
                      sizes="80px"
                      className="object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  {post.tags?.[0] && (
                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {post.tags[0]}
                    </span>
                  )}
                  <h5 className="line-clamp-2 text-sm font-medium leading-snug text-black transition-colors group-hover:text-primary dark:text-white">
                    {post.title}
                  </h5>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RelatedPost;
