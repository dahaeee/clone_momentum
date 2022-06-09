const clock = document.getElementById('clock');
const today = document.getElementById('date');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0")

    today.innerText = `${year}.${month}.${day}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDate() {
    
}

getClock();
setInterval(getClock, 1000);


