let titulo = document.querySelector(".titulo");
	titulo.textContent = "Nutrição Inteligente";

let pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){
    let paciente = pacientes[i]

    let tdPeso = paciente.querySelector(".info-peso");
    let tdAltura = paciente.querySelector(".info-altura");
    let tdImc = paciente.querySelector(".info-imc");
    
    let peso = tdPeso.textContent;
    let altura = tdAltura.textContent;
    
    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);
    
    if(!pesoEhValido){ 
        pesoEhValido = false
        tdImc.textContent = "Peso Inválido!"
        paciente.classList.add("paciente-invalido");
    }
    
    if(!alturaEhValida){
        alturaEhValida = false
        tdImc.textContent = "Altura Inválida"
        paciente.classList.add("paciente-invalido");
        
    }
    
    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 600){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true
    }else{
        return false
    }
}

function calculaImc(peso, altura){
    let imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}