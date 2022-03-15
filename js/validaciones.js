const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
console.log(inputs);

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const validar = (e) => {
    switch (e.target.name) {
        case "correo":
            if (expresiones.correo.test(e.target.value)) {
                document.getElementById('mensajeCorreo').classList.remove('inputError')
            } else {
                document.getElementById('mensajeCorreo').classList.add('inputError')
            }
            break;

        case "nombre":
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById('mensajeNombre').classList.remove('inputError')
            } else {
                document.getElementById('mensajeNombre').classList.add('inputError')
            }
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e)=>{
       console.log(e.target.name)
    })
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});