// Використовуйте JavaScript, щоб завантажити і вставити вміст з файлу header.html
fetch('../html/footer.html')
.then(response => response.text())
.then(data => document.getElementById('footer').innerHTML = data);