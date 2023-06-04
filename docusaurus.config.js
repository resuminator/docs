const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Resuminator",
  tagline: "Build beautiful single-page resumes; without the hassle",
  url: "https://docs.resuminator.in",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo_sq_dark.svg",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: "hacktoberfest-22",
      content:
        "<strong>⚠️ Important Update:</strong> As of 04 June, 2023, Resuminator and its services have entered maintenance-only phase. <a href='https://github.com/resuminator/resuminator#%EF%B8%8F-important-update-resuminator-entering-maintenance-only-phase'> Learn more about it here</a>",
      backgroundColor: "#eed202",
      textColor: "#212121",
      isCloseable: false,
    },
    navbar: {
      title: "Resuminator Docs",
      logo: {
        alt: "Resuminator Logo",
        src: "img/logo_sq_dark.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "right",
          label: "Docs",
        },
        {
          href: "https://github.com/resuminator/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Resuminator.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/resuminator/docs/edit/main/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
