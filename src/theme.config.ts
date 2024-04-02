export const THEME_CONFIG: App.Locals["config"] = {
  /** blog title */
  title: "如焰尋香城",
  /** your name */
  author: "Tiankai Xie",
  /** website description */
  desc: "Rediscory the beauty of typography",
  /** your deployed domain */
  website: "https://astro-theme-typography.vercel.app/",
  /** your locale */
  locale: "en-us",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    {
      name: "school",
      href: "https://scholar.google.com/citations?user=iGRSrJUAAAAJ&hl=en&inst=1960582506653781529&oi=ao",
    },
    {
      name: "github",
      href: "https://github.com/tiankaixie",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/tiankaixie/",
    },
    {
      name: "twitter",
      href: "https://twitter.com/tiankaixie",
    },
  ],
  /** your header info */
  header: {
    twitter: "@moeyua13",
  },
  /** your navigation links */
  navs: [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "CV",
      href: "/cv",
    },
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [{ name: "胡适", path: "hu-shi" }],
};
