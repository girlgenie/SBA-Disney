// create elements
const div = document.createElement('div'); 
const paragraph = document.createElement('p'); 
const h1Element = document.createElement('h1'); 
const btn = document.createElement('button');

// add content to elements 
h1Element.innerText = " Welcome to Disney World Online";
console.log(h1Element)
paragraph.innerText = " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum officia delectus, quos quaerat quasi, ipsa architecto quibusdam, cum quam incidunt accusamus sed rem. Unde deleniti odio, maiores minus sunt quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum, exercitationem rem autem sint delectus quia perferendis iusto deserunt vero cupiditate voluptatum eveniet veritatis consectetur ipsum quam nisi veniam a. "
console.log(paragraph)
btn.innerText = "Submit"
console.log(btn);

// attach child to parentnode to get ready to display on Browser
div.appendChild(h1Element); 
div.appendChild(paragraph); 
div.appendChild(btn);

// access HTML body and add div to it and begin building user interface
document.body.appendChild(div); 

// styling body
const bodyElem = document.querySelector('body'); 
bodyElem.setAttribute('class', 'container'); 