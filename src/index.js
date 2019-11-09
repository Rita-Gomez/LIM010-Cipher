<<<<<<< HEAD
/* Acá va tu código */
let intentos = 0;
const mensaje = ['incorrecta', 'equivocada', 'erronea. Vuelve a intentarlo'];
let password = document.getElementById("pass1");
password.addEventListener("keyup",(e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    document.getElementById("btn1").click();
  }
});
const element = document.getElementById("btn1");
element.addEventListener("click", () =>{
    const pass1 = document.getElementById('pass1').value;
    const nameUser = document.getElementById('name').value.toUpperCase();
    if (pass1 == 'LABORATORIA') {
      let info = document.getElementById("dato");
      info.innerHTML = `MOVIE VIEW :  ${nameUser}`;
        document.getElementById('page1').classList.add('hide');
        document.getElementById('dato').classList.remove('hide');
        document.getElementById('page2').classList.remove('hide');
        document.getElementById('black').classList.add('hide');
        document.getElementById('refresh').classList.add('hide');
        document.getElementById('image456').classList.add('hide');
        document.getElementById('image123').classList.remove('hide');
    } else {
      let info = document.getElementById("texto");
      info.innerHTML = `Contraseñ@ ${mensaje[0]} <i class="fa fa-exclamation-circle" style="color: #8c230f"></i>`;
      intentos = intentos + 1;
      if (intentos == 1) {
        let info = document.getElementById("texto");
        info.innerHTML = `Contraseñ@ ${mensaje[1]} <i class="fa fa-exclamation-circle" style="color: #8c230f"></i>`;
      } if (intentos == 2) {
        let info = document.getElementById("texto");
        info.innerHTML = `Contraseñ@ ${mensaje[2]} <i class="fa fa-exclamation-circle" style="color: #8c230f"></i>`;
      } else if (intentos == 4){
        document.getElementById("pass1").disabled = true;
        document.getElementById("name").disabled = true;
        document.getElementById("btn1").disabled = true;
        info.innerHTML = ``;
        document.getElementById('black').classList.add('overlay');
        document.getElementById('black').classList.remove('hide');
        document.getElementById('refresh').classList.add('btn6');
        document.getElementById('refresh').classList.add('hide');
      }
    }
});
/*Actualizar página*/
const btn6 = document.getElementById('btn6');
btn6.addEventListener('click', () => {
  location.reload();
});

/*Funcionalidad del cifrado*/
const btnCifrar = document.getElementById("btn2");
btnCifrar.addEventListener("click", () => {
  let textoCifrado = document.getElementById("comenta").value;
  let numero = document.getElementById("number").value;
  document.getElementById("resultado").innerHTML = cipher.encode(numero, textoCifrado);
});

/*Funcionalidad del descifrado*/
const btnDescifrar = document.getElementById("btn3");
btnDescifrar.addEventListener("click", () =>{
  let textoDescifrado = document.getElementById("comenta").value;
  let numero = document.getElementById("number").value;
  document.getElementById("resultado").innerHTML = cipher.decode(numero, textoDescifrado);
});

/*Regresar al menu principal*/
const btnRegresar = document.getElementById("btn5");
btnRegresar.addEventListener("click", () => {
  document.getElementById('page2').classList.add('hide');
  document.getElementById('dato').classList.add('hide');
  document.getElementById("pass1").value = "";
  document.getElementById("name").value = "";
  document.getElementById('page1').classList.remove('hide');
  document.getElementById('image456').classList.remove('hide');
  document.getElementById('image123').classList.add('hide');
});

/*limpiando los valores ingresados y mostrados*/
const btnLimpiar = document.getElementById("btn4");
btnLimpiar.addEventListener("click", () => {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("comenta").value = "";
  document.getElementById("number").value = "";
});
=======
const contra = document.getElementById('password1');
let texto_cifrar = document.getElementById('text_cifrar');
let texto_descifrar = document.getElementById('text_descifrar');
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

if (password <3) {
    if (contra1 === 'L') {
    vista_1.classList.add('hide');
    vista_3.classList.remove('hide');
    }
    else  {
        document.getElementById('error').innerHTML = 'Contraseña incorrecta'
        password++;
        }
        } else {
        vista_1.classList.add('hide');
        vista_2.classList.remove('hide');
        
 
}});
cifrar.addEventListener('click',() =>{
    let text_cifrar = texto_cifrar.value;
    let number_cifrar = numeros.value;
    vista_3.classList.add('hide');
    vista_4.classList.remove('hide');
    cifrar.value = text_cifrar;
    cifrar.value = cipher.encode(text_cifrar, number_cifrar);
    document.getElementById('cifrar_1').innerHTML = cifrar.value;
});
descifrar.addEventListener('click', () => {
    let text_descifrar = texto_descifrar.value;
    let number_descifrar = numeros.value;
    vista_3.classList.add('hide');
    vista_5.classList.remove('hide');
    descifrar.value = text_descifrar;
    descifrar.value = cipher.decode(text_descifrar, number_descifrar);
    document.getElementById('descifrar_1').innerHTML = descifrar.value;
});
back_one.addEventListener('click', () => {
    vista_4.classList.add('hide');
    vista_3.classList.remove('hide');
});
back_two.addEventListener('click', (event) => {
    event.preventDefault();
    vista_5.classList.add('hide');
    vista_3.classList.remove('hide');
});

>>>>>>> cfd108475fadc7a88c3faf1e13b264caa59e3706

