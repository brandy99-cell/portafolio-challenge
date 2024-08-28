const textArea = document.querySelector(".container__box");
const mensaje = document.querySelector(".mensaje");
const copiarTexto = document.querySelector(".copiar");
const mensajeError = document.querySelector(".mensaje-error")
const encryptButton = document.getElementById('.btn__encriptar');
const decryptButton = document.getElementById('.btn__desencriptar');



function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    /*mensaje.style.backgroundImage = "none"*/

}

function encriptar(caracterEncriptado){
    let clave = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    caracterEncriptado = caracterEncriptado.toLowerCase()

    for(let i = 0; i < clave.length; i++){
        if(caracterEncriptado.includes(clave[i][0])){
            caracterEncriptado = caracterEncriptado.replaceAll(clave[i][0], clave[i][1])

        }
    }
    return caracterEncriptado
}

function desencriptar(caracterDesencriptada){
    let clave = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    caracterDesencriptada = caracterDesencriptada.toLowerCase()

    for(let i = 0; i < clave.length; i++){
        if(caracterDesencriptada.includes(clave[i][1])){
            caracterDesencriptada = caracterDesencriptada.replaceAll(clave[i][1] , clave[i][0])
        }
    }
    return caracterDesencriptada
}

function copyToClipboard(){      
    navigator.clipboard.writeText(mensaje.value)
}

function validarTexto(input) {
    const caracter = /^[a-zñ0-9\s]+$/i;
    if(!caracter.test(input.value)){
        mensajeError.style.display = 'block';
        mensajeError.querySelector(".Advertencia").textContent = "Porfavor, solo letras minúsculas y sin acentos";
        setTimeout(() => {
            mensajeError.style.display = 'none'
        }, 3500);
        input.value = input.value.replace(/[^\w\s]/gi, '').toLowerCase();

    }
}

textArea.addEventListener('input', () => {
    validarTexto(textArea);
})

