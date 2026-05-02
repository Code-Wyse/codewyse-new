import BlogData from "@/components/Blog/blogData";
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
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
