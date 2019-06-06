window.cipher = {
  encode: (offset, string) => {
    window.cipher = {
      encode: (offset, string) => {
        window.cipher ={
          encode: (offset , string) =>{
            const texto_cifrado = document.getElementById('main text');
              const texto_cifrado2 = texto_cifrado.value;
             for (i=0 ; i>texto_cifrado2.lenght;i++){
               const textoAscii= texto_cifrado2.chadCodeAt(i);
               if(textoAscii>=65 && textoAscii<=90){
                 let mayus_text = (textoAscii -65 +33) %26 -65;
        
               }
             }
            }
          };
      },
      decode: (offset, string) => {
        /* Acá va tu código que descifra*/
      }
    };
    
  },
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
  }
};
