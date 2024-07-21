`use strict`;

document.getElementById(`heading`).textContent = `Hello World`;
document.querySelector(`.title`).style.backgroundColor = `green`;

const body = document.querySelector(`body`);
const div = document.createElement(`div`);
const ul = document.createElement(`ul`);
div.textContent = `This is a div`;
div.appendChild(ul);
body.append(div);
const li = document.createElement(`li`);
li.textContent = `list`;
ul.appendChild(li);

body.removeChild(document.getElementById(`heading`));
ul.removeChild(li);
document.querySelector(`img`).src = `./img-2.jpg`;
document.querySelector(`img`).classList.add(`img`);
document.querySelector(`img`).classList.remove(`img`);

document.querySelector(`#btn`).addEventListener(`click`,(e)=>{
    document.querySelector(`p`).textContent = `Namastey World`
})

document.querySelector(`p`).addEventListener(`mousemove`,function(e){
    document.querySelector(`p`).style.border = `1px solid black`;
})