const clock = document.getElementById('clock');
const today = document.getElementById('date');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();

    today.innerText = `${year}년${month}월${day}일`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDate() {
    
}

getClock();
setInterval(getClock, 1000);


