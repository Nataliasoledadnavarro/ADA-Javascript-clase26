///////EJERCICIO 1 MUMUKI/////////////////

/*let nombre = prompt("¿Cuál es tu nombre?");

let apellido = prompt("¿Cuál es tu apellido");

alert("Hola " + nombre + " " + apellido + ", bienvenida a Ada");*/

////////EJERCICIO 2 MUMUKI//////////////

/*let primerGusto = prompt("¿Cuál es el primer gusto?");

let segundoGusto = prompt("¿Cuál es el segundo gusto?");

let tercerGusto = prompt("¿Cuál es el tercer gusto?");

alert(
"Aquí tiene su helado de " + primerGusto + ", " + segundoGusto +" y " +tercerGusto);*/

/////EJERCICIO 3 MUMUKI///////

/*let nombre = prompt("¿Cuál es tu nombre?");

let apellido = prompt("¿Cuál es tu apellido?");

let edad = prompt("¿Cuál es tu edad?");

let nacionalidad = prompt("¿Cuál es tu nacionalidad?");

let dni = prompt("¿Cuál es tu número de documento?");

alert("El nuevo perfil fue ingresado al sistema: nombre: " + nombre + ", apellido: " + apellido + ", edad: " + edad + ", nacionalidad: " + nacionalidad + ", número de documento: " + dni);*/

/////EJERCICIO 4 MUMUKI///////

/*let nombrePlaylist = prompt("¿Cuál es el nombre de la playlist?");

let primeraCancion = prompt("¿Cuál es la primera canción?");

let segundaCancion = prompt("¿Cuál es la segunda canción?");

let terceraCancion = prompt("¿Cuál es la tercera canción?");

alert("Se ha creado la playlist " + nombrePlaylist + " con las canciones " + primeraCancion + ", " + segundaCancion + ", " + terceraCancion)*/

/////EJERCICIO 5 MUMUKI///////

/*let calle = prompt("¿Cuál es la calle?");

let numeroDeCalle = prompt("¿Cuál es el número?");

let departamento = prompt("¿Cuál es el departamento?");

let codigoPostal = prompt("¿Cuál es el código postal?");

let ciudad = prompt("¿Cúal es la ciudad?");

let pais = prompt("¿Cúal es el país?");

alert("La dirección que ha ingresado es: " + calle + " " + numeroDeCalle + " " + departamento + ", " + codigoPostal + ", " + ciudad + ", " + pais);*/

/////EJERCICIO 6 MUMUKI///////

/*let edad = prompt("Ingresá una edad por favor");

alert("El equivalente de " + edad + " en años perros es: " + (edad*7));*/

/////EJERCICIO 7 MUMUKI///////

/*let cantidadDeMinutos = prompt("Ingresá una cantidad de minutos");

alert ("El resultado de la conversión de " + cantidadDeMinutos + " minutos a segundos es: " + (cantidadDeMinutos*60));*/

/////EJERCICIO 8 MUMUKI///////

/*let cantidadDeDias = prompt("Ingresá una cantidad de días por favor");

alert(
  "El resultado de la conversión de " +
    cantidadDeDias +
    " días a segundos es: " +
    cantidadDeDias * 86400
);*/

/////EJERCICIO 9 MUMUKI///////

/*let cantidadDeKm = prompt("Ingresá una cantidad de kilómetros por favor");

alert(
  "El resultado de la conversión de " +
    cantidadDeKm +
    " kilometros a millas es: " +
    cantidadDeKm * 0.621371
);*/

/////EJERCICIO 10 MUMUKI///////

/*let baseDelTriangulo = prompt("Ingresá el valor de la base del triángulo");

let alturaDelTriangulo = prompt("Ingresá el valor de la altura del triángulo");

alert(
  "El resultado del área del triángulo con base " +
    baseDelTriangulo +
    " y altura " +
    alturaDelTriangulo +
    " es: " +
    (baseDelTriangulo * alturaDelTriangulo) / 2
);*/

/////EJERCICIO 11 MUMUKI///////

/*let baseDelRectangulo = prompt("Ingresá el valor de la base del rectángulo");

let alturaDelRectangulo = prompt(
  "Ingresá el valor de la altura del rectángulo"
);

alert(
  "El resultado del perímetro del rectángulo con base " +
    baseDelRectangulo +
    " y altura " +
    alturaDelRectangulo +
    " es: " +
    (2 * baseDelRectangulo + 2 * alturaDelRectangulo)
);*/

/////EJERCICIO 12 MUMUKI///////

/*let numero = prompt("Ingresá un número por favor");

let porcentaje = prompt("Ingresá un porcentaje");

alert("El porcentaje " + porcentaje + " del número " + numero + " es: " + (porcentaje*numero/100);*/

/////EJERCICIO 13 MUMUKI///////

/*let distanciaDelRecorrido = prompt("Ingresá la distancia del recorrido");

let aPie = 5;

let bicicleta = 10;

let auto = 50;

alert(
  "Para la distancia " +
    distanciaDelRecorrido +
    " km en bicicleta el tiempo de viaje es " +
    (distanciaDelRecorrido * 1 / bicicleta) +
    " hora/s, a pie " +
    (distanciaDelRecorrido * 1 / aPie) +
    " hora/s y en auto " +
    (distanciaDelRecorrido * 1 / auto) +
    " hora/s"
);*/

/////EJERCICIO 14 MUMUKI///////

let primerEscala = prompt("¿Cúal es la primer escala?");

let duracionPrimerEscala = prompt("¿Cúal es la duración de la primer escala?");

let segundaEscala = prompt("¿Cúal es la segunda escala?");

let duracionSegundaEscala = prompt(
  "¿Cúal es la duración de la segunda escala?"
);

let tercerEscala = prompt("¿Cúal es la tercer escala?");

let duracionTercerEscala = prompt("¿Cúal es la duración de la tercer escala?");

alert(
  "La duración total del vuelo con escala en " +
    primerEscala +
    " de duración " +
    duracionPrimerEscala +
    " hs, " +
    segundaEscala +
    " de duración " +
    duracionSegundaEscala +
    " hs y " +
    tercerEscala +
    " de duración " +
    duracionTercerEscala +
    " hs es: " +
    (duracionPrimerEscala + duracionSegundaEscala + duracionTercerEscala) +
    " hs"
);
