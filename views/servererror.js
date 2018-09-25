const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (error) => layout(html`
   <h1>Page Not Found</h1>
   <p>SERVER ERROR</p>
   <img src="500.gif" alt="Trulli" width="500" height="333">
 `);
