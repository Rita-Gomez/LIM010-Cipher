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
        document.getElementById('refresh').classList.remove('hide');
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
});

/*limpiando los valores ingresados y mostrados*/
const btnLimpiar = document.getElementById("btn4");
btnLimpiar.addEventListener("click", () => {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("comenta").value = "";
  document.getElementById("number").value = "";
});

