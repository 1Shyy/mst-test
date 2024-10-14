window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 99) {
        this.document.getElementById('header').classList.add("header-back")
    } else {
        this.document.getElementById('header').classList.remove("header-back")
    }
});
