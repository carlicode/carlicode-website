// CloudFront Function (viewer-request) de carlicode.com, runtime cloudfront-js-2.0.
// 1. www.carlicode.com redirige (301) a https://carlicode.com: una sola URL para compartir y para Google.
// 2. Las rutas de la SPA sin extensión (/cv, /museo, /media-kit) se sirven desde /index.html
//    y React Router decide qué página mostrar. Los archivos (/assets/app.js, /carli-mark.svg) pasan tal cual.

var CANONICAL_HOST = "carlicode.com";

function querystringToString(querystring) {
  var parts = [];
  for (var key in querystring) {
    var param = querystring[key];
    var values = param.multiValue ? param.multiValue : [param];
    for (var i = 0; i < values.length; i++) {
      parts.push(values[i].value === "" ? key : key + "=" + values[i].value);
    }
  }
  return parts.length ? "?" + parts.join("&") : "";
}

// eslint-disable-next-line no-unused-vars
function handler(event) {
  var request = event.request;
  var host = request.headers.host ? request.headers.host.value.toLowerCase() : "";

  if (host === "www." + CANONICAL_HOST) {
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        location: { value: "https://" + CANONICAL_HOST + request.uri + querystringToString(request.querystring) },
      },
    };
  }

  var lastSegment = request.uri.split("/").pop();
  if (lastSegment.indexOf(".") === -1) {
    request.uri = "/index.html";
  }
  return request;
}
