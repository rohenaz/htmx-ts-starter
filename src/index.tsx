import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { Elysia } from "elysia";
import { htmx } from "elysia-htmx";
import { tailwind } from "elysia-tailwind";
import * as elements from "typed-html";

import { BaseHtml } from "./components/layout/BaseHtml";
import { Body } from "./components/layout/Body";
import { menuItemsGet } from "./handlers/menuItems/get";

const app = new Elysia()
  .use(html())
  .use(htmx())
  .use(
    tailwind({
      path: "/public/styles.css", // 2.1 Where to serve the compiled stylesheet;
      source: "./src/styles.css", // 2.2 Specify source file path (where your @tailwind directives are);
      config: "./tailwind.config.js", // 2.3 Specify config file path or Config object;
      options: {
        minify: true, // 2.4.1 Minify the output stylesheet (default: NODE_ENV === "production");
        map: true, // 2.4.2 Generate source map (default: NODE_ENV !== "production");
        autoprefixer: false, // 2.4.3 Whether to use autoprefixer;
      },
    })
  )
  .use(staticPlugin({ prefix: "/" }))
  .get("/", ({ html }) =>
    html(
      <BaseHtml>
        <Body>
          <div>Hello</div>
        </Body>
      </BaseHtml>
    )
  )
  .get("/page/:id", ({ html, params }) => {
    return html(
      <BaseHtml>
        <Body>
          <div>Page {params.id}</div>
        </Body>
      </BaseHtml>
    );
  })
  .get("/menuItems", menuItemsGet)
  .listen(2001);
