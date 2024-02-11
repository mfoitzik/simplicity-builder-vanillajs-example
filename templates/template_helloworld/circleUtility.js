if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  function init() {
    console.log("test");
  }


  (function() {
    function init() {
      //You need to add a window message listener
      //This gets triggered by the Simplicity Builder(TM) Attribute Editor
      //The Attribute Editor sends the following object in the event data parameter
      // {
      //    command: "run",
      //    function: "callback Name", //this is the value you entered in the callback field of the Attribute Editor setup in the config file
      //    id: abc123 //this is the id of the element that has the data-sbsettings data attribute in it
      // }
      // depending on whether the attributeEditor's mode is set to "constant" or "once", this gets triggered either whenever a parameter in the attribute editor changes or when the OK button is clicked
      window.addEventListener('message', (event) => {
        const getCommand = event.data.command;
        if (getCommand == "run") {
          switch(event.data.function) {
            case 'circleFunction':
              const main = document.getElementById(event.data.id);
              const obj = JSON.parse(main.getAttribute('data-settingsobj'));
              const textHolder = main.querySelector("p");
              const circle = main.querySelector("div");
              textHolder.innerText = obj["displaytext"];
              circle.style.backgroundColor = obj["circlecolor"];
              break;
          }
        }
      });
    }
  
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  })();

