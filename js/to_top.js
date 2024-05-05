window.onload = function() {
    const scrollToTopBtn = document.querySelector(".img-to-top-btn");
    const header = document.getElementById("header");
    const sticky = header.offsetTop;

    window.onscroll = () => {
        scrollFunction(scrollToTopBtn);
    };

    function scrollFunction(scrollToTopBtn) {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;

        scrollToTopBtn.style.opacity = scrollPosition > 20 ? '1' : '0';
        header.classList.toggle("sticky", scrollPosition > sticky);
    }

    scrollToTopBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
};
