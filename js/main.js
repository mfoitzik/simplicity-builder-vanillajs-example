import helloWorldConfig from "../config/config_helloworld.js";
import basicConfig from "../config/config_basic.js";
import template_helloworld from "../templates/template_helloworld/template_helloworld.js";
import template_basic from "../templates/template_basic/template_basic.js";
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  function init() {
    const currentHost = window.location.protocol + "//" + window.location.host;
    const sb = document.getElementById("sbuilder");
    const helloWorldLink = document.getElementById("helloWorldExample");
    const basicLink = document.getElementById("basicExample");
    let config = JSON.stringify(helloWorldConfig);
    sb.setConfig(JSON.parse(config.replaceAll("##BASEADDRESS##", currentHost)));
    sb.setContent(template_helloworld.replaceAll("##BASEADDRESS##", currentHost));
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
    helloWorldLink.addEventListener('click', function(e) {
      e.preventDefault();
      let config = JSON.stringify(helloWorldConfig);
      sb.setConfig(JSON.parse(config.replaceAll("##BASEADDRESS##", currentHost)));
      sb.setContent(template_helloworld.replaceAll("##BASEADDRESS##", currentHost));
    });
    basicLink.addEventListener('click', function(e) {
      e.preventDefault();
      let config = JSON.stringify(basicConfig);
      sb.setConfig(JSON.parse(config.replaceAll("##BASEADDRESS##", currentHost)));
      sb.setContent(template_basic.replaceAll("##BASEADDRESS##", currentHost));
    });
  }