document.addEventListener("DOMContentLoaded", function () {
    const inputComentario = document.querySelector(".input_comentario")
    const quentionarioSection = document.querySelector('.questionario')

    function addComentario(event) {


        if (event.key === "Enter") {
            const comentario = document.createElement("input")
            comentario.classList.add('novo_comentario')
            comentario.type = "text";
            comentario.value = inputComentario.value
            quentionarioSection.appendChild(comentario)
            inputComentario.value = ''
        }
    }


    inputComentario.addEventListener('keyup', addComentario)
})

