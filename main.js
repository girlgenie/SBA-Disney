// create elements
const div = document.createElement('div'); 
const paragraph = document.createElement('p'); 
const h1Element = document.createElement('h1'); 
// const btn = document.createElement('button');
const addPrincess = document.createElement('li')

// add content to elements 
h1Element.innerText = " Welcome to Disney World Online";
console.log(h1Element)
paragraph.innerText = " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum officia delectus, quos quaerat quasi, ipsa architecto quibusdam, cum quam incidunt accusamus sed rem. Unde deleniti odio, maiores minus sunt quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum, exercitationem rem autem sint delectus quia perferendis iusto deserunt vero cupiditate voluptatum eveniet veritatis consectetur ipsum quam nisi veniam a. "
console.log(paragraph)
// btn.innerText = "add Princess 1"
// console.log(btn);

// attach child to parentnode to get ready to display on Browser
div.appendChild(h1Element); 
div.appendChild(paragraph); 
// div.appendChild(btn);

// access HTML body and add div to it and begin building user interface
document.body.appendChild(div); 

// styling body
const bodyElem = document.querySelector('body'); 
bodyElem.setAttribute('class', 'container'); 

// // add event listener to text for mouseover
// const princess = document.querySelectorAll('.princess')  //can not get code to work here
// princess.addEventListener('mouseenter', () => {
//     princess.style.backgroundColor = 'red';
// });

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to elements with class '.princess'
    const princesses = document.querySelectorAll('.princess');
    princesses.forEach(princess => {
        princess.addEventListener('mouseenter', () => {
            princess.style.backgroundColor = 'red';
        });
    });

const btn = document.querySelector('#add-input-btn')
// console.log(btn)

// add event listener
btn.addEventListener('click', () => {
    // console.log("button clicked!");

    // create a list item 
const li = document.createElement('li');
const paragraph = document.createElement('p');
// console.log(li,paragraph)

const input = document.querySelector('input');
console.log(input.value)

// set list item text content to input value 
li.textContent = input.value
// append li to ul
const unorderedList = document.querySelector('ul')
unorderedList.appendChild(li)
})

const princesspic = document.getElementById("princess-pic"); 
princesspic 


// ================== ALL BAD CODE DOESNT WORK BELOW HERE==========================
    // Add Jasmine to the list of Disney princesses
    // const disneyPrincessList = document.getElementById('disney-princess');
    // const newPrincess = document.createElement('li');
    // const newPrincessInput = document.createElement('li');
    // newPrincessInput.textContent = 
    // newPrincess.textContent = 'Jasmine';
    // disneyPrincessList.appendChild(newPrincess);
});
// document.addEventListener('DOMContentLoaded', function() {
//     // Select the button element
//     const addButton = document.getElementById('add-input-btn');
    
//     // Add event listener to the button
//     addButton.addEventListener('click', function() {
//         // Create a new input element
//         const newInput = document.createElement('input');
//         newInput.type = 'text'; // Set input type
        
//         // Append the new input element to the container
//         const inputContainer = document.getElementById('input-container');
//         inputContainer.appendChild(newInput);
//     });
// });

// const addPrincessbtn = document.querySelector('#add-princess'); 

// attempting to iterate over princess list
// const disneyPrincessList = document.querySelector('.princesses');
// for (let princesses of disneyPrincessList) {
//     console.log(princesses);
//   }
// console.log(disneyPrincessList)
    // const newPrincess = document.createElement('li');
    // const newPrincessInput = document.createElement('li');
    // newPrincessInput.textContent = 
    // newPrincess.textContent = 'Jasmine';
    // disneyPrincessList.appendChild(newPrincess);