window.cipher = {
  encode: (text_cifrar, number_cifrar) => {
    //mensaje recibido
    let mensajecifrado1 = "";
    let text_ready;
    for (let i = 0; i < text_cifrar.length; i++) {
      let letrasCifrado = text_cifrar[i];
      //Validación de espacios
      if (letrasCifrado.match(/[a-z ]/i)) {
        //Cifrado de mayúsculas
        if (text_cifrar.charCodeAt(i) >= 65 && text_cifrar.charCodeAt(i) <= 90) {
          text_ready = (text_cifrar.charCodeAt(i) - 65 + parseInt(number_cifrar)) % 26 + 65;
          mensajecifrado1 += String.fromCharCode(text_ready);
        }
        //Cifrado de minúsculas
        else if (text_cifrar.charCodeAt(i) >= 97 && text_cifrar.charCodeAt(i) <= 122) {
           text_ready = (text_cifrar.charCodeAt(i) - 97 + parseInt(number_cifrar)+26) % 26 + 97;
          mensajecifrado1 += String.fromCharCode(text_ready);
        } else {
          mensajecifrado1 += letrasCifrado;
        }
      }
    }
    return mensajecifrado1;

  },
  decode: (text_descifrar, number_descifrar) => {
    //mensaje recibido 2
    let mensajedescifrado1 = "";
    let text_ready;
    for (let i = 0; i < text_descifrar.length; i++) {
      let letrasDescifrado = text_descifrar[i];
      //Validación de espacios
      if (letrasDescifrado.match(/[a-z ]/i)) {
        //Descifrado de mayúsculas
        if (text_descifrar.charCodeAt(i) >= 65 && text_descifrar.charCodeAt(i) <= 90) {
         let text_ready = (text_descifrar.charCodeAt(i) + 65 - parseInt(number_descifrar)) % 26 + 65;
          mensajedescifrado1 += String.fromCharCode(text_ready);
        }
        //Descifrado de minúsculas
        else if (text_descifrar.charCodeAt(i) >= 97 && text_descifrar.charCodeAt(i) <= 122) {
          text_ready = (text_descifrar.charCodeAt(i) - 97 - parseInt(number_descifrar) + 52) % 26 + 97;
          mensajedescifrado1 += String.fromCharCode(text_ready);
        } else {
          mensajedescifrado1 += letrasDescifrado;
        }
      }
    }
    return mensajedescifrado1;
  }
};