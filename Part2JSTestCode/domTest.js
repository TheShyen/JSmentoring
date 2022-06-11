'use strict';

console.log(document.body); // <body>...</body>

for(let i = 0; i < document.body.childNodes.length; i++) {
  console.log(document.body.childNodes[i]);
  /*
  #text
  <h1>
  #text
  <h2>
  #text
  <div>
  #text
  <script>
  */
}
