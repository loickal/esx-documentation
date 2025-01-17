// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ESX Documentation",
  tagline: "Industry Leading FiveM Framework",
  url: "https://docs.esx-framework.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://cdn.discordapp.com/attachments/936727454087806987/937875927717785660/30593074.png",
  organizationName: "esx-framework",
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "legacy",
          routeBasePath: "legacy"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss")
        }
      })
    ]
  ],
  plugins: ["docusaurus-plugin-sass", "docusaurus-plugin-google-adsense", [
    "@docusaurus/plugin-content-docs",
    {
      id: "infinity",
      path: "infinity",
      routeBasePath: "infinity"
    },
  ],
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "tutorials",
      path: "tutorials",
      routeBasePath: "tutorials"
    },
  ],
],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark"
      },
      googleAdsense: {
        dataAdClient: "ca-pub-9580213111363531"
      },
      navbar: {
        title: "ESX Framework",
        logo: {
          alt: "ESX Logo",
          src: "https://cdn.discordapp.com/attachments/936727454087806987/937875927717785660/30593074.png"
        },
        items: [
          {
            type: "doc",
            docId: "installation",
            position: "left",
            label: "ESX Legacy"
          },
          {
            type: "doc",
            docId: "installation",
            docsPluginId: "infinity",
            position: "left",
            label: "ESX Infinity"
          },
          {
            type: "doc",
            docId: "database",
            docsPluginId: "tutorials",
            position: "left",
            label: "Tutorials"
          },
          {
            href: "https://github.com/esx-framework",
            label: "GitHub",
            position: "right"
          },
          {
            href: "https://guilded.gg/ESX-Framework-OFFICIAL",
            label: "Guilded",
            position: "right"
          },
          {
            href: "https://discord.esx-framework.org/",
            label: "Discord",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        copyright: `Copyright &copy; ${new Date().getFullYear()} ESX Framework`
      },
      prism: {
        darkTheme: require("prism-react-renderer/themes/vsDark"),
        theme: require("prism-react-renderer/themes/github"),
        additionalLanguages: ["lua"]
      }
    })
};

module.exports = config;
