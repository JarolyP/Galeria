import datosCategorias from './datos/categorias';
const {categorias} = datosCategorias;
const contenedorCategorias = document.getElementById('categorias');

categorias.forEach((categoria) => {
    const nuevaCategoria = document.createElement('a');
    const plantilla = `
    <a href="#" class="categoria" data-categoria="america">
    <img class="categoria__img" src=${categoria.imagenPortada} alt="" />
    <div class="categoria__datos">
        <p class="categoria__nombre">${categoria.nombre}</p>
        <p class="categoria__numero-fotos">${categoria.numeroFotos}</p>
    </div>
    </a>`;

    nuevaCategoria.innerHTML = plantilla;
    nuevaCategoria.classList.add('categoria');
    nuevaCategoria.href = '#';
    nuevaCategoria.dataset.categoria = categoria.id;

    contenedorCategorias.append(nuevaCategoria)
})