function requestValidator(inputObj) {
  let methods = ["GET", "POST", "DELETE", "CONNECT"];
  let uriPattern = /^[\w.]+$/gm;
  let versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  let specialChar = [`<`, `>`, `\\`, `&`, `'`, `"`];

  if (!inputObj.hasOwnProperty("method")) {
    throw new Error("Invalid request header: Invalid Method");
  }
  if (!methods.includes(inputObj.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }
  if (!inputObj.hasOwnProperty("uri")) {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (inputObj.uri !== "*" && !inputObj.uri.match(uriPattern)) {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (!inputObj.hasOwnProperty("version")) {
    throw new Error("Invalid request header: Invalid Version");
  }
  if (!versions.includes(inputObj.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }
  if (!inputObj.hasOwnProperty("message")) {
    throw new Error("Invalid request header: Invalid Message");
  }

  for (let ch of inputObj.message) {
    if (specialChar.includes(ch)) {
      throw new Error("Invalid request header: Invalid Message");
    }
  }
  return inputObj;
}
requestValidator({
  method: "GET",
  uri: "svn.public.catalog",
  version: "HTTP/1.1",
  message: "",
});
requestValidator({
  method: "OPTIONS",
  uri: "git.master",
  version: "HTTP/1.1",
  message: "-recursive",
});
