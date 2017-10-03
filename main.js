const Presentation = require("./lib/presentation");
const View = require("./lib/view");

document.addEventListener("DOMContentLoaded", function(){
  const presentation = new Presentation();
  new View(presentation);
});
