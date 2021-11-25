const createProxyMiddleware = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://backend:4000/",
      pathRewrite: { "^/api": "" },
      changeOrigin: true,
    })
  );
};