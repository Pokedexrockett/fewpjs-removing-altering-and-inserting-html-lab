// Write your code here!
let node = document.getElementById("main");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}

let newHeader = document.querySelector("h1")