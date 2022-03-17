var formulario = document.getElementById('formulario'), 
inputCorreo = document.getElementById('email'), 
inputNombre = document.getElementById('name');

var email, nombreCompleto, fechaNacimiento, genero, gradoAcad, edad;

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

function validar(e) {

}

function calcularEdad(fechaNac) {
    let nacimiento = new Date(fechaNac), fechaActual = new Date(), edad;
    edad =  fechaActual.getFullYear() - nacimiento.getFullYear();
    return edad;
}

function enviarFormulario(e){
    e.preventDefault();
    email = document.getElementById('email').value;
    nombreCompleto = document.getElementById('name').value;
    fechaNacimiento = document.getElementById('fecha').value;
    genero = document.getElementById('genero');
    gradoAcad = document.getElementById('gradoAcad');
    edad = calcularEdad(fechaNacimiento);
    console.log(edad);
}
inputCorreo.addEventListener('keypress', );
inputNombre.addEventListener('keypress', );
formulario.addEventListener('submit', enviarFormulario);