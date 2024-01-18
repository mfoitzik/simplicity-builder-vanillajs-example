import getConfig from "../config/config1.js";
import template1 from "../templates/template1.js";
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  function init() {
    const currentHost = window.location.protocol + "//" + window.location.host;
    const sb = document.getElementById("sbuilder");
    let config = JSON.stringify(getConfig());
    sb.setConfig(JSON.parse(config.replaceAll("##BASEADDRESS##", currentHost)));
    sb.setContent(template1.replaceAll("##BASEADDRESS##", currentHost));
  }