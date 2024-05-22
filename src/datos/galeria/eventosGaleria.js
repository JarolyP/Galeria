import cerrarGaleria from "./cerrarGaleria";


const galeria = document.getElemntById('galeria');
galeria.addEventListener('click', (e) => {
    const boton = e.target.closest('button');

    if(boton?.dataset?.accion === 'cerrar-galeria'){
        cerrarGaleria();
    }
})