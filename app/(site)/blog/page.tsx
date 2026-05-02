import { getAllPosts } from "@/lib/blogPosts";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Web, Mobile, AI & ML, SaaS and CRM Insights",
  description:
    "Codewyse blog: insights, guides and news on custom web apps, mobile development, AI & ML, generative AI, SaaS, MVPs and CRM systems.",
  keywords: [
    "web development blog",
    "mobile development blog",
    "AI ML blog",
    "SaaS blog",
    "CRM blog",
    "Next.js blog",
    "React blog",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Web, Mobile, AI & ML, SaaS and CRM Insights",
    description:
      "Insights and guides on custom web apps, mobile, AI & ML, SaaS and CRM development.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Web, Mobile, AI & ML, SaaS and CRM Insights",
    description:
      "Insights and guides on custom web apps, mobile, AI & ML, SaaS and CRM development.",
  },
};

const BlogPage = async () => {
  const posts = getAllPosts();
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e6f7f4] via-white to-white pt-35 pb-12 dark:from-blacksection dark:via-black dark:to-black md:pt-40 lg:pb-16">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
          <span className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[2px] text-primary">
            Codewyse Insights
          </span>
          <h1 className="mb-4 max-w-3xl text-3xl font-bold leading-tight text-black dark:text-white md:text-4xl lg:text-5xl">
            Web, Mobile, AI &amp; ML, SaaS and CRM Insights
          </h1>
          <p className="max-w-2xl text-base text-waterloo dark:text-gray-300 md:text-lg">
            Field-tested guides and decisions from the engineers building custom web apps, mobile apps, AI &amp; ML systems and CRM platforms at Codewyse.
          </p>
        </div>
      </section>

      <section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {posts.map((post) => (
              <BlogItem key={post._id} blog={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
