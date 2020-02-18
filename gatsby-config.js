module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Space Mono',
            variants: ['400', '400i', '700', '700i'],
          },
        ],
      },
    },
  ],
}
