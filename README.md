# Crypto Buddies

This is a Gatsby React app interview challenge. Please push your code to a branch in this repo (following the instructions below).

In this exercise you will create 2 pages. Use React, Apollo Client and the GraphQL endpoint that can be found here: https://eu1.prisma.sh/nevena-djaja/mocks/dev.

First off, watch the [video](https://storage.googleapis.com/graph-web/Crypto%20Buddies.mp4) to see what the end result should look like.

Designs can be found [here](https://invis.io/9YVZX88EA7R). You might be able to use the "Inspect" mode in Invision to get the styles. Here is the [Sketch file](https://storage.googleapis.com/graph-web/Crypto%20Buddies.sketch).

Please create these 2 pages:

1. Use `pages/index.js` as a starting point. Make it display the list of images and implement a search that shows search results on the same page (just like you see in the video).
2. The second page should be called `details.js`. It should load when you click on an image. Feel free to hardcode the `id` that you'll need for the GraphQL query. Or you can use Gatsby's [createPages API](https://www.gatsbyjs.org/docs/node-apis/#createPages) and get the `id` from the URL, for example `/details/:id` (this is optional).

# Notes

- Make sure to implement the animations as they appear in the video.
- The UI should be responsive.
- Please use Apollo client with React hooks to query the data (packages should already be installed - check `package.json`).
- Make GraphQL queries for the all the pages and for the search functionality. This resource might be helpful: https://www.prisma.io/docs/reference/prisma-api/queries-ahwee4zaey.

# Setup and Development

1. Clone this repo `git clone git@github.com:graphprotocol/crypto-buddies.git`
2. Make sure you are inside of the repo you just cloned, by running `cd crypto-buddies`
3. Check out a branch `git checkout -b <name>/challenge` (for example `anna/challenge`)
4. Run `yarn` to install all dependencies
5. Run `yarn develop` to start the app
6. Open `http://localhost:8000` in your browser
