import cerrarGaleria from "./cerrarGaleria";
import slideClick from "./slideClick";

const galeria = document.getElementById('galeria');
galeria.addEventListener('click', (e) => {
    const boton = e.target.closest('button')

    if(boton?.dataset?.accion == 'cerrar-galeria'){
        cerrarGaleria();
    }

    if(e.target.dataset.id){
        slideClick(e);
    }
})