import getConfigHelloWorld from "../config/config_helloworld.js";
import getConfigBasic from "../config/config_basic.js";
import template_helloworld from "../templates/template_helloworld/template_helloworld.js";
import template_basic from "../templates/template_basic/template_basic.js";
import template_bootstrap from "../templates/template_bootstrap/template_bootstrap.js";
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
    const bootstrapLink = document.getElementById("bootstrapExample");
    let config = JSON.stringify(getConfigBasic());
    //let config = JSON.stringify(getConfigHelloWorld());
    sb.setConfig(JSON.parse(config.replaceAll("##BASEADDRESS##", currentHost)));
    sb.setContent(template_basic.replaceAll("##BASEADDRESS##", currentHost));
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
      let config = JSON.stringify(getConfigHelloWorld());
      sb.setConfig(JSON.parse(config.replaceAll("##BASEADDRESS##", currentHost)));
      sb.setContent(template_helloworld.replaceAll("##BASEADDRESS##", currentHost));
    });
    basicLink.addEventListener('click', function(e) {
      e.preventDefault();
      sb.setContent(template_basic.replaceAll("##BASEADDRESS##", currentHost));
    });
    bootstrapLink.addEventListener('click', function(e) {
      e.preventDefault();
      sb.setContent(template_bootstrap.replaceAll("##BASEADDRESS##", currentHost));
    });
  }