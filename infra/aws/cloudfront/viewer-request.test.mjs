import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (name) => readFileSync(new URL(name, import.meta.url), "utf8");
const { handler } = new Function(`${read("./viewer-request.js")}\nreturn { handler };`)();
const evento = (name) => JSON.parse(read(`./eventos/${name}.json`));

test("una ruta de la SPA se sirve desde /index.html", () => {
  assert.equal(handler(evento("ruta-spa")).uri, "/index.html");
});

test("la raíz se sirve desde /index.html", () => {
  const event = evento("ruta-spa");
  event.request.uri = "/";
  assert.equal(handler(event).uri, "/index.html");
});

test("un archivo con extensión pasa sin cambios", () => {
  assert.equal(handler(evento("archivo")).uri, "/assets/index-abc123.js");
});

test("www redirige con 301 al dominio principal y conserva ruta y query", () => {
  const response = handler(evento("www"));
  assert.equal(response.statusCode, 301);
  assert.equal(response.headers.location.value, "https://carlicode.com/museo?sala=comunidad");
});

test("www conserva parámetros repetidos y sin valor", () => {
  const event = evento("www");
  event.request.uri = "/";
  event.request.querystring = {
    tag: { value: "ia", multiValue: [{ value: "ia" }, { value: "aws" }] },
    preview: { value: "" },
  };
  assert.equal(handler(event).headers.location.value, "https://carlicode.com/?tag=ia&tag=aws&preview");
});
