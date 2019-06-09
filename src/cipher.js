window.cipher = {
  encode: (text_cifrar, number_cifrar) => {
    //mensaje recibido
    let mensajecifrado1 = "";
       for (let i = 0; i < text_cifrar.length; i++) {
      let letrasCifrado = text_cifrar[i];
      if (letrasCifrado.match(/[a-z]/i)){
        if(text_cifrar.charCodeAt(i) >= 65 && text_cifrar.charCodeAt(i) <= 90 ){
          let text_ready = (text_cifrar.charCodeAt(i) - 65 + parseInt(number_cifrar)) %26 +65;
          mensajecifrado1+= String.fromCharCode(text_ready);
        }
      
      }

      
      
    }
    return mensajecifrado1;
    
  },
  decode: (text_descifrar, number_descifrar) => {
     let mensajedescifrado1 = "";
     for (let i =0;i< text_descifrar.length ; i++){
       let letrasDescifrado = text_descifrar[i];
       if(letrasDescifrado.match(/[a-z]/i)){
         if(text_descifrar.charCodeAt(i) >= 65 && text_descifrar.charCodeAt(i)<=90){
           let text_ready1 = (text_descifrar.charCodeAt(i) + 65 - parseInt(number_descifrar)) %26 +65;
           mensajedescifrado1 += String.fromCharCode(text_ready1);
         }
       }
     }
     return mensajedescifrado1;
 } };
