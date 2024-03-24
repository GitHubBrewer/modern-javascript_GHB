// get a reference on the clock div
const clock = document.querySelector('.clock');

// create a function for updating the time on the clock
// using the setInterval to refresh the function every second
const html = setInterval(() => {
    // create the clock objects
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    // create the HTML template string
    clock.textContent = `${hours}:${minutes}:${seconds}`;        
}, 1000);

/* shaun's solution
const tick = () => {

  const now = new Date();
  
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
  `;

  clock.innerHTML = html;

};

setInterval(tick, 1000);
*/
