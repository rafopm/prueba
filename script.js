var textInput = document.querySelector("#text-area-input");
var textOutput = document.querySelector("#text-area-output");
var btnCopy = document.querySelector(".btn-copy");

function botonEncriptar() {
    const textoEncriptado = encriptar(textInput.value);
    textOutput.value = textoEncriptado;
    textInput.value = "";
    btnCopy.style.visibility = "visible";
}

function botonDescencriptar() {
    const textoEncriptado = desencriptar(textInput.value);
    textOutput.value = textoEncriptado;
    textInput.value = "";
}

function botonCopiar() {
    textOutput.select();
    document.execCommand('copy');
}

function encriptar(textEncrip){
    let matrizCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textEncrip = textEncrip.toLowerCase();

    for(let i=0;i<matrizCode.length;i++){
        if(textEncrip.includes(matrizCode[i][0])){
            textEncrip = textEncrip.replaceAll(matrizCode[i][0],matrizCode[i][1]);                    
        }        
    }
    return textEncrip;
}

function desencriptar(textDescrip){
    let matrizCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textDescrip = textDescrip.toLowerCase();

    for(let i=0;i<matrizCode.length;i++){
        if(textDescrip.includes(matrizCode[i][1])){
            textDescrip = textDescrip.replaceAll(matrizCode[i][1],matrizCode[i][0]);                    
        }        
    }
    return textDescrip;
}
