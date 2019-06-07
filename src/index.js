/* Acá va tu código */
let intentos = 0;
const mensaje = ['incorrecta', 'erronea', 'equivocada. Vuelve a intentarlo'];
const element = document.getElementById("btn1");
element.addEventListener("click", () =>{
    const pass1 = document.getElementById('pass1').value;
    const nameUser = document.getElementById('name').value.toUpperCase();
    if (pass1 == 'LABORATORIA') {
      info = document.getElementById("dato");
      info.innerHTML = `BIENVENIDA  ${nameUser}`;
        document.getElementById('page1').classList.add('hide');
        document.getElementById('dato').classList.remove('hide');
        document.getElementById('page2').classList.remove('hide');
    } else {
        info = document.getElementById("texto");
        info.innerHTML = `Contraseñ@ ${mensaje[0]}`;
        intentos = intentos +1;
        if (intentos == 1){
        info = document.getElementById("texto");
        info.innerHTML = `Contraseñ@ ${mensaje[1]}`;
        } if (intentos == 2) {
        info = document.getElementById("texto");
        info.innerHTML = `Contraseñ@ ${mensaje[2]}`;
      }
    }
});

/*limpiando los valores ingresados y mostrados*/

const btnLimpiar = document.getElementById("btn4");
btnLimpiar.addEventListener("click", function () {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("comenta").value = "";
  document.getElementById("number").value = "";
});

