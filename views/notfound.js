const html = require("html-template-tag");
const layout = require("./layout");

module.exports =  () => {
  layout(html`

 <body>
    <h1>Page Not Found</h1>
    <p>Sorry, but your page was lost at sea</p>
    <img src="404.jpg" alt="Trulli" width="500" height="333">
 </body>

  `)
} 

