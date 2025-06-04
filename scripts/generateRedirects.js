const fs = require('fs');
const path = require('path');

// List of redirect rules
const redirects = [
  "/_next/static/* /_next/static/:splat 200",
  "/images/* /images/:splat 200",
  "/favicon.ico /favicon.ico 200",
  "/about-us /about-us/index.html 200",
  "/privacy-policy /privacy-policy/index.html 200",
  "/terms-conditions /terms-conditions/index.html 200",
  "/support /support/index.html 200",
  "/blog /blog/index.html 200",
  "/blog/blog-details /blog/blog-details/index.html 200",
  "/projects /projects/index.html 200",
  "/project-details/crazzypizza /project-details/crazzypizza/index.html 200",
  "/project-details/ensure-ups /project-details/ensure-ups/index.html 200",
  "/project-details/junohouseclub /project-details/junohouseclub/index.html 200",
  "/project-details/tordao /project-details/tordao/index.html 200",
  "/project-details/trifits /project-details/trifits/index.html 200",
  "/project-details/vnexia /project-details/vnexia/index.html 200",
  "/careers /careers/ 301",
  "/careers/ /careers/index.html 200",
  "/saas /sass/index.html 200",
  "/services /services/ 301",
  "/services/ /services/index.html 200",
  "/auth/signin /auth/signin/index.html 200",
  "/auth/signup /auth/signup/index.html 200",
  "/docs /docs/index.html 200",
  "/error /error/index.html 200",
  "/* /index.html 200"
];

const outputPath = path.join(__dirname, '../out/_redirects');

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, redirects.join('\n'), 'utf8');

console.log('✅ _redirects file created at out/_redirects');
