const routes = (module.exports = require("next-routes")());

const urls = [
  { file: "index", path: "/index" },
  { file: "auth", path: "/auth/[...slug]" },
  { file: "favoritesymbols", path: "/favoritesymbols" },
  { file: "indices", path: "/indices" },
  { file: "posts", path: "/posts/[...params]" },
  { file: "search", path: "/search" },
  { file: "latestvideo", path: "/latestvideo" },
  { file: "searchsymbols", path: "/searchsymbols" },
  { file: "symbols", path: "/[...params]" },
];

urls.forEach(({ file, path }) =>
  // routes.add(file, `/:lang${path}`)); //
  routes.add(file, `${path}`),
);
routes.add("default", "/index", "index");
