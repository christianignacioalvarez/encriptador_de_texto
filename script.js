const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function encriptar(textoIngresado) {
    var matrizEncriptador = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoIngresado = textoIngresado.toLowerCase();

    for (let i = 0; i < matrizEncriptador.length; i++) {
        if (textoIngresado.includes(matrizEncriptador[i][0])) {
            textoIngresado = textoIngresado.replaceAll(matrizEncriptador[i][0], matrizEncriptador[i][1]);
        }
    }
    return textoIngresado;
}

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    ocultarImagen();
}

function desencriptar(textoIngresado) {
    var matrizEncriptador = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoIngresado = textoIngresado.toLowerCase();

    for (let i = 0; i < matrizEncriptador.length; i++) {
        if (textoIngresado.includes(matrizEncriptador[i][1])) {
            textoIngresado = textoIngresado.replaceAll(matrizEncriptador[i][1], matrizEncriptador[i][0]);
        }
    }
    return textoIngresado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    ocultarImagen();
}

function copiar() {
    navigator.clipboard.writeText(mensaje.value);
    inputTexto.value = "";
    swal({
        title: "Texto copiado!",
        text: "Ahora a desencriptarlo!",
        icon: "warning",
        className: "sweetAlert",
      });
}

function ocultarImagen() {
    document.getElementById("ocultaElementos").style.display = "none";
}