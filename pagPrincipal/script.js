const btnAbrirMim = document.getElementById("btnOpenEu")
const btnFecharMim = document.getElementById("btnCloseMim")

btnAbrirMim.addEventListener("click", function(){
    var modal = document.getElementById("sobreMimModal");
    modal.style.display = "flex";
    setTimeout(function() {
        modal.classList.add("show");
    }, 10);
})

btnFecharMim.addEventListener("click", function(){
    var modal = document.getElementById("sobreMimModal");
    modal.classList.remove("show");
    setTimeout(function() {
        modal.style.display = "none";
    }, 400);
})