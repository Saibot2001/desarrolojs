// // cajero como simulador
// Info guardada
let savedEmail = "juan@gmail.com.ar";
let savedPass = "1234";
let espacioCajas = 1000;
let ingresar = false;

// Login
for (let i = 2; i >= 0; i--) {
    let userEmail = prompt("Ingresa mail registrado.");
    let userPass = prompt("Ingresa contraseña registrada. Tenes " + (i + 1) + " intentos");
    if (userEmail == savedEmail && userPass == savedPass) {
        alert("Usuario correcto");
        ingresar = true;
        break;
} else {
    alert("Error. Te quedan " + i + " intentos");
    }
}

let stockCajas = parseInt(prompt("Ingresa stock inicial de cajas:"));

if (ingresar) {
       //accedemos a la info de la cuenta
    let opcion = prompt("Elegi una opcion: \n1-Stock \n2-Consumo de cajas \n3-Ingreso de cajas \nPresiona X para finalizar");
    while (opcion != "X" && opcion != "x") {
        switch (opcion) {
//Consulta stock
            case "1": alert("El stock de cajas es:"+stockCajas)
                break
            case "2":consumoCajas()
                break
            case "3":ingresoCajas()
                break
        }
        opcion = prompt(
            "Elegi una opcion: \n1-Stock \n2-Consumo de cajas \n3-Ingreso de cajas \nPresiona X para finalizar"
        );
    }
}

//Consumo
    function consumoCajas(){
        let consumo = parseInt(prompt("Ingresa la cantidad consumida"))
        if(consumo <= stockCajas){
            stockCajas-=consumo 
            alert("Consumo exitoso. Tu nuevo stock es: "+stockCajas)
        }else{
            alert("Consumo incorrecto")
        }
    }

//Stockeo

    function ingresoCajas(){
        
        let ingreso = parseInt(prompt("Ingresa la cantidad a ingresar"))
        if(ingreso <= espacioCajas){
            stockCajas+=ingreso 
            alert("Ingreso exitoso. Tu nuevo stock es: "+stockCajas)
        }else{
            alert("Espacio insufuciente")
        }
        espacioCajas-=stockCajas
    }
