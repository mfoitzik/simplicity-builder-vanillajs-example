import getConfig from "../config/config1.js";
import template1 from "../templates/template1.js";
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  function init() {
    console.log("I have inited");
    const sb = document.getElementById("sbuilder");
    sb.setConfig(getConfig());
    sb.setContent(template1);
  }