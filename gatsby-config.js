module.exports = {
  siteMetadata: {
    title: `Refactored Life`,
    name: `Saheel Wagh's blog`,
    siteUrl: `https:/refactored.life`,
    description: `Refactored Life: Shape your life to conquer the digital world.`,
    hero: {
      heading: `Refactored Life : Tiny changes; Big wins`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/saheelwagh`,
      },
      {
        name: `github`,
        url: `https://github.com/saheelwagh`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/refactored_life`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`,
      },
      {
        name: `Medium`,
        url: `https://medium.com/@codingtigerhiddenbugs`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Refactored Life`,
        short_name: `Refactored Life`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/rl dp.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
