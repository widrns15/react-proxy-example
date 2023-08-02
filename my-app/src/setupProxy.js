const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/api", "/api2"],
    createProxyMiddleware({
      target: process.env.REACT_APP_API_URL,
      changeOrigin: true,
      router: {
        "/api2": process.env.REACT_APP_API_URL2,
      },
    })
  );
};
