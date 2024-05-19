// Declaracion de Variables
//Ponemos la variable count a 0
let count = 0
//Declaramos la variable contEl cogiendo del html el elemento con id "cont-el"
let contEl = document.getElementById("cont-el")

//Declaramos antEl
let antEl = document.getElementById("before-el")

//Funcion Sumar
function increment () {
    count += 1
    contEl.textContent = count
}


//Funcion Restar
function decrement () {
    count -= 1
    contEl.textContent = count

    /* if para no poner numeros negativos
    if (count > 0 ) {
        count -= 1
        contEl.textContent = count
    }else {
        alert("No puedes poner numeros negativos")
    }   */
}

//Funcion Guardar
function save() {
    /* Guardar los numeros negativos de forma distinta
    if (count < 0) {
        let strCount = "(" + count + ")" + " - "
        antEl.textContent += strCount
    } else {
        let strCount = count + " - "
        antEl.textContent += strCount
    }*/
    let strCount = count + " - "
    antEl.textContent += strCount
    count = 0
    contEl.textContent = 0
}

//Funcion Resetear
function reset() {
    count = 0
    contEl.textContent = 0
    antEl.textContent = "Entradas anteriores: "
}