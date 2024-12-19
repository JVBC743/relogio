
var relogio = document.getElementById("relogio")
var botao = document.getElementById("botao_parar")

function funcionar_relogio(){
    const data = new Date();
    var hora = String(data.getHours()).padStart(2,"0")
    var min = String(data.getMinutes()).padStart(2, '0')
    var seg = String(data.getSeconds()).padStart(2, '0');

    var eletronico = hora + ":" + min + ":" + seg
    relogio.textContent = eletronico
}

var intervalo = setInterval(funcionar_relogio, 1000)

function parar(){

    setTimeout(function() {
        clearInterval(intervalo);
    }, 0)

    return 1

}

function funcionar(){

    if(parar() == 1){

        var intervalo = setInterval(funcionar_relogio, 1000)

        return intervalo

    }
}




