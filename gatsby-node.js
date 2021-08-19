const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  // we use a Promise to make sure the data are loaded
  // before attempting to create the pages with them
  return new Promise((resolve, reject) => {
    createPage({
      path: "/details/:id",
      matchPath: "/details/:id",
      component: path.resolve("./src/pages/details/[id].js"),
    });

    resolve();
  });
};
