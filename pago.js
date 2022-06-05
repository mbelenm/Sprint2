let lpersonas = [];
let lmontos = [];

const detalles = document.getElementById("detalle");
const pagos = document.getElementById("pago");

function detalle(persona, monto){
    let personaPago = document.createElement('p');
    personaPago.textContent = persona + " $ " + monto;
    detalles.appendChild(personaPago);
}

function pagoCadaUno(){
    let sum = 0;
    
    for (let i = 0; i < lmontos.length; i++) {
        sum += parseInt(lmontos[i]);
    }
    
    let cada_uno = sum / (lmontos.length);
    pagos.innerHTML = "<p> El total es de : $" + sum + "</p>" + "<p> tiene que pagar cada uno : $" + cada_uno + "</p>"
}

function nuevoPago(){
    let persona = document.getElementById("persona").value;
    let monto = document.getElementById("monto").value;

    lpersonas.push(persona);
    lmontos.push(monto);

    detalle(persona, monto);
    pagoCadaUno();
}