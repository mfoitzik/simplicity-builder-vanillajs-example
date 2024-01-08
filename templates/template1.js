const template1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Full Layout -Simple I</title>
</head>
<style>
    /*
        #e8dff5 // #fce1e4 // #fcf4dd // #ddedea // #daeaf6
        purple/red/yellow/green/blue
    */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        --standard-padding: .5rem;
        --aside-right-width: 200px;
        --aside-left-width: 200px;
        --body-bgcolor: #ffffff;
        --body-width: 100%;
        --body-margin: 0px;
        --nav-button-bgcolor: transparent;
        --nav-button-bordercolor: transparent;
        --nav-button-borderradius: 0px;
        --nav-button-textcolor: #39485A;
        --nav-button-bgcolor-hover: transparent;
        --nav-button-bordercolor-hover: #39485A;
        --nav-button-borderradius-hover: 2px;
        --nav-button-textcolor-hover: #39485A;
    }
    html {
        display: grid;
        align-items: center;
        justify-content: stretch;
        background-color:var(--body-bgcolor);
    }
    body {
        height:fit-content;
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: 12.5% auto 1fr auto 12.5%;
        width: 100%;
        margin: var(--body-margin);
        font-family:Arial, Helvetica, sans-serif;
    }
    p {
        margin-top: .5rem;
        margin-bottom: .5rem;;
    }
    header {
        background-color: #bedce9;
        grid-column-start: 1;
        grid-column-end: 6;
        grid-row-start: 1;
        grid-row-end: 2;
        display:flex;
        flex-direction: row;
        position: sticky;
        top:0;
        padding: var(--standard-padding);
        z-index:2;
    }
    nav ul {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        list-style-type: none; /* Remove bullets */
        padding: 0; /* Remove padding */
        margin: 0; /* Remove margins */
        margin-left:40px;
    }
    nav ul li {
        display: flex;
        justify-content: center;
        align-content: center;
        margin: .25rem;
        text-align: left;
        position: relative;
    }
    nav ul li a, nav ul li button {
        border: 1px solid var(--nav-button-bordercolor);
        padding: 12px;
        background-color: var(--nav-button-bgcolor);
        border-radius: var(--nav-button-borderradius);
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16px;
        font-weight: 600;
        color:var(--nav-button-textcolor);
        text-decoration: none;
    }
    nav ul li button {
        display:flex;
        align-items: center;
    }
    nav ul li button svg {
        display: inline-block;
        margin-left:6px;
        fill:var(--nav-button-textcolor);
    }
    nav ul li button svg{
        height:12px;
        width:12px;
    }
    nav ul li button svg.opened {
        transform: rotate(180deg);
    }

    nav ul li a:focus, nav ul li button:focus {
        outline: 3px solid #DB260A;
        outline-offset: .125rem;
    }
    nav ul li a:hover, nav ul li button:hover {
        background-color:var(--nav-button-bgcolor-hover);
        border-color: var(--nav-button-bordercolor-hover);
        border-radius: var(--nav-button-borderradius-hover);
        color: var(--nav-button-textcolor-hover);
    }
    /*nav ul li button:hover + ul {
        display: flex;
    }*/
    .wrapper {
        border:2px solid red;
        display: grid;
        width:80%;
        justify-self: center;
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 3;
    }
    .submenu-show {
        display: flex;
    }
    nav ul li ul {
        display: none;
        flex-direction: column;
        position: absolute;
        left: 0;
        top:100%;
        margin-top: 3px;;
        width:auto;
        white-space: nowrap;
        text-align: left;
        justify-content: stretch;
        background-color: #39485A;
    }
    nav ul li ul li {
        margin: 3px0;
        color: #f2f8f8;
    }
    nav ul li ul li a {
        width: 100%;
        text-align: left;
        color: #f2f8f8;
    }
    nav ul li ul li a:hover {
        width: 100%;
        text-align: left;
        color: #f2f8f8;
        text-decoration: underline;
    }
    nav {
        display: flex;
        flex-grow: 1;
    }
    .nav-right {
        display:flex;
        align-items:center;
        margin-left:auto;
    }
    .nav-right svg {
        max-height: 1rem;
        height:1rem;
        fill:#39485A;
    }
    .nav-right li a {
        border: 1px solid transparent;
        padding: 12px;
        background-color: transparent;
        text-decoration: none;
    }
    .nav-right li a:hover {
        border: 1px solid #39485A;
        padding: 12px;
        background-color: transparent;
        text-decoration: none;
    }

    aside.left {
        background-color: #fce1e4;
        border:2px solid black;
        grid-column-start: 2;
        grid-column-end: 3;
        padding: var(--standard-padding);
        width: var(--aside-right-width);
    }
    aside.right {
        background-color: #fce1e4;
        grid-column-start: 4;
        grid-column-end: 5;
        padding: var(--standard-padding);
        width: var(--aside-right-width);
    }
    main {
        background-color: #f2f8f8;
        grid-column-start: 3;
        grid-column-end: 5;
        padding-bottom:30px;
        position: relative;
        padding: var(--standard-padding);
    }
    footer {
        background-color: #39485A;
        color: #f2f8f8;
        grid-column-start: 1;
        grid-column-end: 6;
        text-align:center;
        padding: var(--standard-padding);
    }
    .logo {
        max-width: 200px;
    }
    .skiplink {
    position: fixed;
    color:white;
    left:0;
    top:0;
    padding: 6px;
    margin: 6px;
    border: 3px solid #3c578c;
    outline:none !important;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #d3463c;
    text-decoration: none;
    transform: translateY(-120%);
    z-index: 20;
}
.submenu-align-right {
    left: auto;
    right: 0;
}
.skiplink:hover {
    color:white;
    text-decoration: underline;
}

.skiplink:focus  {
    transform: translateY(0%);
}

/* Menu toggle styles. */
.menu-toggle {
  font-size: 0.875em;
	padding: .5em;
    border: none;
    border-color:#39485A;
	border-radius: 0;
	background: #000;
	color: #fff;
    cursor: pointer;
	display: none;
	text-transform: uppercase;
	transition: all 0.25s ease-in-out;
    background-color: var(--nav-button-bgcolor);
    height:35px;
    width:35px;
    margin: 8px;
}
.menu-toggle:hover {
    border: 1px solid #39485A;
    outline: transparent;
}
.menu-toggle:focus {
    outline: thin dotted;
    outline-offset: -2px;
}

.icon {
	display: inline-block;
	fill: currentColor;
	height: 1em;
	width: 1em;
	vertical-align: middle;
	position: relative; /* Align more nicely with capital letters */
	top: -0.0625em;
}
.icon-menu-toggle {
	width: 1.2em;
	height: 1.2em;
    top: 0;
    fill: var(--nav-button-textcolor);
}

/* Animate menu icon (lines). */
.svg-menu-toggle .line {
  opacity: 1;
  transform: rotate(0) translateY(0) translateX(0);
  transform-origin: 1em 1em;
  transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
}
.svg-menu-toggle .line-1 {
  transform-origin: 1em 2.5em;
}
.svg-menu-toggle .line-3 {
  transform-origin: 1em 4.5em;
}

.menu-toggle.opened .svg-menu-toggle .line-1 {
  transform: rotate(45deg) translateY(0) translateX(0);
}
.menu-toggle.opened .svg-menu-toggle .line-2 {
  opacity: 0;
}
.menu-toggle.opened .svg-menu-toggle .line-3 {
  transform: rotate(-45deg) translateY(0em) translateX(0em);
}

/* Text meant only for screen readers. */
.screen-reader-text {
	clip: rect(1px, 1px, 1px, 1px);
	position: absolute !important;
	height: 1px;
	width: 1px;
	overflow: hidden;
}
    @media (max-width: 1200px){
        main {
            grid-column-start: 1;
            grid-column-end: 6;
            margin-left:2rem;
            margin-right:2rem;
        }
        header {
            flex-direction: column;
        }
        header img {
            margin-bottom: 10px;
        }
        .menu-toggle {
            display:inline-block;
            position: absolute;
            top:0;
            right:0;
        }
        nav {
            display: block;
        }
        nav ul {
            margin-left:0px;
        }
        nav ul, .nav-right {
            display: none;
        }
        nav ul, nav ul li {
            flex-direction: column;
        }
        nav ul li {
            margin: 4px 0px 4px 0px;
        }
        nav ul li a, nav ul li {
            width: 100%;
        }
        nav ul li ul {
            position: relative;
        }
        header {
            height:60px;
            overflow: hidden;
        }

        header.full {
            height: auto;
        }
        .nav-right {
            flex-direction: row;
        }
        nav ul li {
            margin: 3px;
        }
    }
</style>
<body>
    <a href="#maincontent" class="skiplink" tabindex="1"
      >Skip to main content</a
    >
    <header>

        <img src="https://www.simplicityblocks.com/public/sbsamples/images-layout1/logo-mycompany.svg" class="logo" />
        <nav>
            <button class="menu-toggle" id="menu-toggle" aria-expanded="false"><span class="screen-reader-text">Menu</span>
                <svg class="icon icon-menu-toggle" aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100">
                    <g class="svg-menu-toggle">
                        <path class="line line-1" d="M5 13h90v14H5z"/>
                        <path class="line line-2" d="M5 43h90v14H5z"/>
                        <path class="line line-3" d="M5 73h90v14H5z"/>
                    </g>
                </svg>
            </button>
            <ul>
                <li>
                    <a href="#">HOME</a>
                </li>
                <li data-sbblock="Code" data-sbzone="hovo" data-sbeditor="code">
                    <a href="https://www.mifo.com">ABOUT</a>
                </li>
                <li>
                    <button type="button" aria-expanded="false" aria-controls="submenu5">PRODUCTS <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="199.404px" height="199.404px" viewBox="0 0 199.404 199.404" style="enable-background:new 0 0 199.404 199.404;"
                        xml:space="preserve">
                   <g>
                       <polygon points="199.404,63.993 171.12,35.709 99.702,107.127 28.284,35.709 0,63.993 99.702,163.695 	"/>
                   </g>
                   </svg></button>
                    <ul id="submenu5" aria-hidden="true">
                        <li>
                            <a href="#">PRODUCT 1</a>
                        </li>
                        <li>
                            <a href="#">PRODUCT 2</a>
                        </li>
                        <li>
                            <a href="#">PRODUCT 3</a>
                        </li>
                        <li>
                            <a href="#">PRODUCT 4</a>
                        </li>
                        <li>
                            <a href="#">PRODUCT 5</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" data-sbblock="Code" data-sbzone="hovo" data-sbeditor="code">F.A.Q.</a>
                </li>
                <li>
                    <a href="#">CONTACT</a>
                </li>
            </ul>
            <ul class="nav-right">
                <li>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 19.253906 2 C 15.311906 2 13 4.0821719 13 8.8261719 L 13 13 L 8 13 L 8 18 L 13 18 L 13 30 L 18 30 L 18 18 L 22 18 L 23 13 L 18 13 L 18 9.671875 C 18 7.884875 18.582766 7 20.259766 7 L 23 7 L 23 2.2050781 C 22.526 2.1410781 21.144906 2 19.253906 2 z"/></svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"/></svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"/></svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 28 8.558594 C 27.117188 8.949219 26.167969 9.214844 25.171875 9.332031 C 26.1875 8.722656 26.96875 7.757813 27.335938 6.609375 C 26.386719 7.171875 25.332031 7.582031 24.210938 7.804688 C 23.3125 6.847656 22.03125 6.246094 20.617188 6.246094 C 17.898438 6.246094 15.691406 8.453125 15.691406 11.171875 C 15.691406 11.558594 15.734375 11.933594 15.820313 12.292969 C 11.726563 12.089844 8.097656 10.128906 5.671875 7.148438 C 5.246094 7.875 5.003906 8.722656 5.003906 9.625 C 5.003906 11.332031 5.871094 12.839844 7.195313 13.722656 C 6.386719 13.695313 5.628906 13.476563 4.964844 13.105469 C 4.964844 13.128906 4.964844 13.148438 4.964844 13.167969 C 4.964844 15.554688 6.660156 17.546875 8.914063 17.996094 C 8.5 18.109375 8.066406 18.171875 7.617188 18.171875 C 7.300781 18.171875 6.988281 18.140625 6.691406 18.082031 C 7.316406 20.039063 9.136719 21.460938 11.289063 21.503906 C 9.605469 22.824219 7.480469 23.609375 5.175781 23.609375 C 4.777344 23.609375 4.386719 23.585938 4 23.539063 C 6.179688 24.9375 8.765625 25.753906 11.546875 25.753906 C 20.605469 25.753906 25.558594 18.25 25.558594 11.742188 C 25.558594 11.53125 25.550781 11.316406 25.542969 11.105469 C 26.503906 10.410156 27.339844 9.542969 28 8.558594 Z"/></svg>
                    </a>
                </li>
            </ul>
        </nav>
    </header>

    <main id="maincontent" data-sbblock="Main Conent Area" data-sbzone="hi">

    </main>

    <footer>
        &copy;2023 My Company, Inc.
    </footer>
    <script src="https://www.simplicityblocks.com/public/sbsamples/js/animateHeight.js"><\/script>
    <script src="https://www.simplicityblocks.com/public/sbsamples/js/menu.js"><\/script>
      <script id="tsid1">
        var x = "123";
      <\/script>
      <script id="tsid2">
        var y = "456";
      <\/script>
      <script type="module">
        import { changeElementType } from 'https://www.mifo.com/simplicityUtilities.js';
        function changeCssVariableValue(stylesheetID, variableName, variableValue) {
    var r = document.querySelector(':root');
    r.style.setProperty(variableName, variableValue);
    const vstyle = document.getElementById(stylesheetID);
    if (vstyle && vstyle.sheet.cssRules){
      let newCssText = '';
        for (const element of vstyle.sheet.cssRules) {
            if (element.selectorText != ':root') {
                newCssText += element.cssText + '\\n';
            } else {
                if (element.style) {
                    const props = [...element.style]
                    .map((propName) => [
                    propName.trim(),
                    element.style.getPropertyValue(propName).trim()
                    ]);
                    let tempRootStyle = ':root {\\n';
                    props.forEach((prop) => {
                        let outProp = prop[1];
                        if (prop[0] == variableName) {
                          outProp = variableValue;
                        }
                        tempRootStyle += prop[0] + ": " + outProp + ";\\n";
                    });
                    newCssText += tempRootStyle + '}\\n';
                }
            }
        }
        vstyle.innerHTML = newCssText;
    }
}
        window.addEventListener('message', (event) => {
          if (event.data.command === 'run') {
            switch(event.data.function) {
              case 'changeElementType':
                const head = document.getElementById(event.data.id);
                const getHeadingType = head.getAttribute('data-heading');
                changeElementType(head, getHeadingType);
                window.parent.postMessage(
                  {
                    command: 'registerElement',
                    content: event.data.id,
                  },
                  '*'
                );
                break;
              case 'changeCssVariableValue':
                const el = document.getElementById(event.data.id);
                const obj = JSON.parse(el.getAttribute('data-parameters'));
                const styleid =el.getAttribute('data-styleid');
                for (let key of Object.keys(obj)) {
                    let outKey = '';
                    switch(key) {
                      case 'leftWidth':
                        outKey = '--twocol-leftside-width';
                        let rightWidth = 100 - parseInt(obj[key]) + 'fr';
                        obj[key] = parseInt(obj[key]) + 'fr';
                        changeCssVariableValue(styleid, '--twocol-rightside-width', rightWidth);
                        break;
                      case 'leftColor':
                        outKey = '--twocol-leftside-backgroundColor';
                        break;
                      case 'rightColor':
                        outKey = '--twocol-rightside-backgroundColor';
                        break;
                      case 'gap':
                        outKey = '--twocol-gap';
                        break;
                      case 'gapLineWidth':
                        outKey = '--twocol-gap-line-width';
                        break;
                      case 'gapLineColor':
                        outKey = '--twocol-gap-line-color';
                        break;
                      case 'columnPadding':
                        outKey = '--twocol-padding';
                        break;
                      case 'bottomMargin':
                        outKey = '--twocol-margin-bottom';
                        break;
                      case 'minHeight':
                        outKey = '--twocol-min-height';
                        break;
                    }
                    changeCssVariableValue(styleid, outKey, obj[key]);
                }
                break;
            }
          }
        })
      <\/script>
<!--SB-TEMPLATE-END-->
</body>
</html>`;
export default template1;