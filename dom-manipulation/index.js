/*
let paragraph = document.getElementById('paragraph');
 
console.log(paragraph); // <== <p id="paragraph">What is your name?</p>
*/

/*
let links = document.getElementsByClassName('link');
 
console.log(links); // <== HTMLCollection [a#google-link.link, google-link: a#google-link.link]
// 0: a#google-link.link
// length: 1
// google-link: a#google-link.link
// __proto__: HTMLCollection
*/

/*
let paragraph = document.getElementById('paragraph');
let paragraphId = paragraph.getAttribute('id');
console.log(paragraphId); // <== paragraph


let paragraph = document.getElementById('paragraph');
paragraph.setAttribute('id', 'info-paragraph');

let paragraph = document.getElementById('paragraph');
paragraph.removeAttribute('id');
paragraph.setAttribute('class', 'paragraph');


let h2Tag = document.createElement('h2');
console.log(h2Tag); // <== <h2></h2>
h2Tag.innerHTML = 'Elephant';

let parent = document.getElementsByTagName('body')[0];
parent.appendChild(h2Tag);


let text = document.createTextNode('This text is created dynamically  ');
 
parent.appendChild(text);
*/

let parent = document.getElementsByTagName("body")[0];
let pSection = document.createElement("p")
pSection.innerHTML = "Esto es un parrafo creado con el DOM"
pSection.setAttribute("id","pSection")
parent.appendChild(pSection)   
parent.appendChild(document.createTextNode("Este es un texto usando createTextNode") )
let selectElement = document.getElementById("pSection")
parent.removeChild(selectElement)
console.log("Elemento borrado")

let idbutton = document.getElementById("add-item-button")

let codigo = "<ul id='items-list'><li>Item number 1</li><li>Item number 2</li><li>Item number 3</li><li>Item number 4</li><li>Item number 5</li></ul>"
let divSection= document.createElement("div")
divSection.innerHTML= codigo
idbutton.onclick = function(){
    console.log("Evento agregado con el DOM")
    parent.insertBefore(divSection, idbutton)
}
