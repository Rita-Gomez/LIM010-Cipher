window.cipher = {
  encode: (offset, string) => {
    let mensajecifrado = "";
    for (let i = 0; i < string.length; i++) {
      let cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (cadena) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          let textocaracter = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
          mensajecifrado += String.fromCharCode(textocaracter);
        } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
          let textocaracter = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
          mensajecifrado += String.fromCharCode(textocaracter);
        } else if(string.charCodeAt(i) === 32){ // verificar si es un espacio vacio
          mensajecifrado += ' '; 
        }else {
        mensajecifrado += cadena;
      }
    }
  }
    return mensajecifrado;
  },
  decode: (offset, string) => {
    let mensajeDescifrado = "";
    for (let i = 0; i < string.length; i++) {
      let cadena = "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba";
      /*string = string.toUpperCase();*/
      if (cadena) {
        console.log(string.charCodeAt(i))
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          let textocaracter = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
          mensajeDescifrado += String.fromCharCode(textocaracter);
        } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
          let textocaracter = (string.charCodeAt(i) - 97 - parseInt(offset)) % 26 + 97;
          mensajeDescifrado += String.fromCharCode(textocaracter);
        } else if(string.charCodeAt(i) === 32){ // verificar si es un espacio vacio
          mensajeDescifrado += ' '; 
        }else {
        mensajeDescifrado += cadena;
      }
    }
  }
    return mensajeDescifrado;
  },
};
