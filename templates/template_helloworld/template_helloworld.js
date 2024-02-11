let template_helloworld = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simplicity Builder&trade; Hello World Template</title>
  <style>
    * {
      margin: 0;
      padding:0;
      box-sizing: border-box;
    }
    body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height:100vh;
    }
    main {
      background-color: #f4f4f4;
      width: 80%;
      flex: 1;
      padding: 1rem;
    }
    header {
      border: 1px solid red;
      width:100%;
      text-align: center;
      padding: .5rem;
    }
    footer {
      border: 1px solid blue;
      text-align: center;
      width: 100%;
      padding: .5rem;
    }
    .circ {
        width:100%;
        border: 2px solid red;
        height: 200px;
      }
      .circ div {
        height: 196px;
        width: 196px;
        background-color: green;
        border-radius: 50%;
      }
  </style>
</head>
<body>
  <header>
    Header Area
  </header>
  <main id="maincontent" data-sbblock="Main Content Area" data-sbzone="hi">
    
  </main>
  <footer>
    Footer Area
  </footer>
  <script src="##BASEADDRESS##/templates/template_helloworld/circleUtility.js"><\/script>
  <!--SB-TEMPLATE-END-->
</body>
</html>`;
export default template_helloworld;