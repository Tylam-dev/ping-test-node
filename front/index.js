const list = document.querySelector('.messages')
const startButton = document.querySelector('.ping_button')
const stopButton = document.querySelector('.stop_ping_button')
const ip = document.querySelector('.ip')
let socket = io('http://localhost:5151')

socket.on('message', (data) => {
    const li = document.createElement('li');
    if(data.ping === 'active'){
        li.textContent = `the host is alive ${data.hostAlive.isAlive}`;
    }else{
        li.textContent = `ping stopped`;
    }
    list.appendChild(li);
  });
function startPing(e) {
    e.preventDefault()
    socket.emit('message', {state: 'start', ip: ip.value});
    startButton.classList.toggle('hidden')
    stopButton.classList.toggle('hidden')
    ip.disabled = true
}
function stopPing(e) {
    e.preventDefault()
    socket.emit('message', {state: 'stop'});
    startButton.classList.toggle('hidden')
    stopButton.classList.toggle('hidden')
    ip.disabled = false
}

startButton.addEventListener('click', (e) => startPing(e))
stopButton.addEventListener('click', (e) => stopPing(e))