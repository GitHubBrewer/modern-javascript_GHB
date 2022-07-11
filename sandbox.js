// get a reference to the ul (unordered list)
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'chun-li', 'shaun'];

let html = ``;

people.forEach(function(person){
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;