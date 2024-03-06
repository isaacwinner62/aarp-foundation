const checkCre = () => {

const username = document.querySelector('#username').value;
const password = document.querySelector("#password").value;
const mssg = document.querySelector('#mssg');

if (username === 'Isaac Paul' && password === 'paul12345') {
    window.location.href= 'third.html';
    mssg.style.display = 'none';
}
else if (username === 'isaac' && password === 'isaacwinner') {
    window.location.href= 'third.html';
    mssg.style.display = 'none';
}
else {
    mssg.style.display = 'block';
    
}


}

const withBtn = document.querySelector('#btn');
const notify = document.querySelector('.notify');
const showNoti = () => {
notify.style.display = "block";
withBtn.style.display = "none";
}