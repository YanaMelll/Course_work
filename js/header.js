// Використовуйте JavaScript, щоб завантажити і вставити вміст з файлу header.html
fetch('../html/header.html')
.then(response => response.text())
.then(data => document.getElementById('header').innerHTML = data);