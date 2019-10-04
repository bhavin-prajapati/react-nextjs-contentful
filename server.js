const express = require("express");
const next = require("next");
const compression = require('compression');
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(compression());
    server.get("/:locale/", (req, res) => {
      const page = "/home";
      const queryParams = { locale: req.params.locale };
      app.render(req, res, page, queryParams);
    });

    server.get("/:locale/business-registration-comparison", (req, res) => {
      const page = "/business-registration-comparison";
      const queryParams = { locale: req.params.locale };
      app.render(req, res, page, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
