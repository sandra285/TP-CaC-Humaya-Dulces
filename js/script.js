document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelectorAll('.mostrar');

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    section.forEach(section => {
        observer.observe(section);
    });
});
