const galeria = document.getElementById('galeria')
const carousel = (direccion) => {
    const opciones = {
        root: document.querySelector('.galeria__carousel'),
        rootMagin: '0px',
        treshold: 0.9
    }

    const observer = new IntersectionObserver((entradas) => {
        console.log(entradas[0]);

        const slides = galeria.querySelectorAll('.galeria__carousel-slide')
        slides.forEach(slide => {
            observer.unobserve(slide)
        });
    }, opciones);

    const slides = galeria.querySelectorAll('.galeria__carousel-slide')
    slides.forEach(slide => {
        observer.observe(slide)
    });
}

export default carousel;
