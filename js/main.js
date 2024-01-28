import getConfig from "../config/config1.js";
import template1 from "../templates/template1.js";
import template2 from "../templates/template2.js";
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  function init() {
    const currentHost = window.location.protocol + "//" + window.location.host;
    const sb = document.getElementById("sbuilder");
    const basicLink = document.getElementById("basicExample");
    const bootstrapLink = document.getElementById("bootstrapExample");
    let config = JSON.stringify(getConfig());
    sb.setConfig(JSON.parse(config.replaceAll("##BASEADDRESS##", currentHost)));
    sb.setContent(template1.replaceAll("##BASEADDRESS##", currentHost));

    const outputText = document.getElementById("output");
    outputText.value = '';
    sb.addEventListener('publish', function(e) {
      outputText.value = '';
      outputText.value = e.detail;
    });
    sb.addEventListener('save', function(e) {
      outputText.value = '';
      outputText.value = e.detail;
    });
    basicLink.addEventListener('click', function(e) {
      e.preventDefault();
      sb.setContent(template1.replaceAll("##BASEADDRESS##", currentHost));
    });
    bootstrapLink.addEventListener('click', function(e) {
      e.preventDefault();
      sb.setContent(template2.replaceAll("##BASEADDRESS##", currentHost));
    });
  }