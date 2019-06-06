<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="style.css">
  <link rel="icon" type="image/x-icon" href="favicon-32x32.png" sizes="32x32"/>
  <link href="https://fonts.googleapis.com/css?family=Berkshire+Swash|Sigmar+One|Sofia&display=swap" rel="stylesheet">
  <title>Secret Data</title>
</head>
<header></header>

<body background="fondo.jpg">
  <div id="vista1">
    <h1>SECRET DATA.</h1>
    <p>Sabemos que la confidencialidad es importante, es por eso que esta página web es perfecta para ti.
      Al modificar información solo se sabrá su significado al tener la contraseña correcta.</p>
    <p>Por favor ingrese la contraseña</p>
    <input type="password" id="password1">
    <button type="button" id="aceptar1">Ingresar</button>
    <h4 id="error"></h4>
  </div>
  <div id="vista2" class="hide">
    <h1>SECRET DATA</h1>
    <p>Sabemos que la confidencialidad es importante, es por eso que esta página web es perfecta para ti.
      Al modificar información solo se sabrá su significado al tener la contraseña correcta.</p> <br>
    <h1>Lo sentimos, ha superado el número de intentos :(</h1>

  </div>
  <div id="vista3" class="hide">
    <h1>Ingrese el texto en mayúsculas</h1>
    <input type="text" id="text_cifrar" placeholder="CIFRAR TEXTO">
    <input type="text" id="text_descifrar" placeholder="DESCIFRAR TEXTO">
    <br><br>
    <p>N° de desplazamientos</p>
    <input type="number" id="selectnumbers">
    <br><br><br>
    <button class='cifrar1' type="submit" value="cifrado" id="cifrar">CIFRAR</button>
    <button class='descifrar1' type="submit" value="descifrado" id="descifrar">DESCIFRAR</button>

  </div>
  <div id="vista4" class="hide">
    <h1>Tu texto ha sido cifrado con éxito</h1>
    <p id="cifrar"></p>
    <br><br>
    <button type="button" id="back1">Ingresar un nuevo texto</button>
  </div>
  <div id="vista5" class="hide">
    <h1>Tu texto ha sido descifrado con éxito</h1>
    <p id="descifrar"></p>
    <br><br>
    <button type="button" id="back2">Ingresar un nuevo texto</button>
  </div>
  <script src="index.js"></script>
  <script src="cipher.js"></script>
  <footer>
    <div class="container-footer">
        © 2019 Todos los Derechos Reservados | <a href="">Rita Gómez H.</a>
    </div>
    
  </footer>
</body>

</html>
s