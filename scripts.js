const descricaoHover = document.querySelector('.products-hover')

window.onload = function() {
    descricaoHover.style.display = "none"
};

function hoverProdutos() {
    descricaoHover.style.display = "flex"
}

function outHoverProdutos() {
    descricaoHover.style.display = "none"
}
