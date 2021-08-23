const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    createPage({
      path: "/details/:id",
      matchPath: "/details/:id",
      component: path.resolve("./src/pages/details/[id].js"),
    });

    resolve();
  });
};
