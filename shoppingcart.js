// Startkod ta emot Localstorage från index.html
const avatarUrl = localStorage.getItem('avatarUrl');
let imgOfPlayerAvatar = document.querySelector('#imgOfPlayerAvatar');
imgOfPlayerAvatar.src = avatarUrl;
const fullName = localStorage.getItem('fullName');
document.querySelector('.playerName').textContent = fullName;