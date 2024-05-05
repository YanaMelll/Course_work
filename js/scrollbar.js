window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.offsetHeight;
    var scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    var progressBar = document.querySelector('.progress');
    progressBar.style.width = scrollPercent + '%';
});