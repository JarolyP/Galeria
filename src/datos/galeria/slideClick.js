const slideClick = (e) => {
    const id = e.target.dataset.id;
    const galeria = document.getElementById('galeria')
    const categoriaActiva = galeria.dataset.categoria;
    console.log("hiciste click en el slide", id, categoriaActiva)
}

export default slideClick;