const contra = document.getElementById('password1');
let text_cifrar= document.getElementById('text_cifrar');
let text_descifrar=document.getElementById('text_descifrar');


//BOTONES
const aceptar = document.getElementById('aceptar1');
const cifrar = document.getElementById('cifrar');
const descifrar = document.getElementById('descifrar');
const numeros = document.getElementById('selectnumbers')
const back_one = document.getElementById('back1');
const back_two = document.getElementById('back2');
//VISTAS
const vista_1 = document.getElementById('vista1');
const vista_2 = document.getElementById('vista2');
const vista_3 = document.getElementById('vista3');
const vista_4 = document.getElementById('vista4');
const vista_5 = document.getElementById('vista5')
//  CONTADOR DE INTENTOS
let password = 0;
//Funcion Botones
aceptar.addEventListener('click', () => {
    const contra1 = contra.value;

    if (password <= 2) {
        if (contra1 === 'LABORATORIA') {
            vista_1.classList.add('hide');
            vista_3.classList.remove('hide');
        }
        else {
            document.getElementById('error').innerHTML = 'Contraseña incorrecta'
            password++;
           }
    } else {
        vista_1.classList.add('hide');
        vista_2.classList.remove('hide');
        
    }
});
cifrar.addEventListener('click', function()  {

    let text_cifrar = document.getElementById('text_cifrar').value;
    console.log(text_cifrar)
    let number_cifrar= document.getElementById('selectnumbers').value;
    console.log(number_cifrar)
    vista_3.classList.add('hide');
    vista_4.classList.remove('hide');
    document.getElementById('cifrar1').innerHTML.window.cipher.encode(msgCipher)
});
descifrar.addEventListener('click', () => {
    let text_descifrar = document.getElementById('text_descifrar').value;
    let number_descifrar = document.getElementById('selectnumbers').value;
    vista_3.classList.add('hide');
    vista_5.classList.remove('hide');
    document.getElementById('descifrar').innerHTML.window.decode(msgCipher);
});
back_one.addEventListener('click', () => {
    vista_4.classList.add('hide');
    vista_3.classList.remove('hide');
});
back_two.addEventListener('click', () => {
    vista_5.classList.add('hide');
    vista_3.classList.remove('hide');
});

