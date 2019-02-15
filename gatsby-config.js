module.exports = {
  siteMetadata: {
    /***
     * Title of the website
     */
    title: 'graphql.explore-tech.org',
    /**
     * Name of the resource
     */
    content: 'React',
    /**
     * Description
     */
    description:
      'An open source project to help developers learn, develop & explore.',
    /**
     * Url when clicking contribute button
     */
    contributionUrl: '',

    categories: {
      Tools: {
        subtitle: 'Level up your React with tools',
      },
      Javascript: {
        subtitle: 'GraphQL JavaScript Libraries',
      },
      Relay: {
        subtitle: 'GraphQL Relay Libraries',
      },
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/github.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-133219838-2',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/materials`,
        name: 'materials',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
            },
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
