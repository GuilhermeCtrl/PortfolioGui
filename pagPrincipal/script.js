// JavaScript Adicional para Abrir e Fechar o Modal
function abrirSobreMim() {
    var modal = document.getElementById("sobreMimModal");
    modal.style.display = "flex";
    setTimeout(function() {
        modal.classList.add("show");
    }, 10);
}

function fecharSobreMim() {
    var modal = document.getElementById("sobreMimModal");
    modal.classList.remove("show");
    setTimeout(function() {
        modal.style.display = "none";
    }, 400); // Tempo de espera para fechar após a animação
}
