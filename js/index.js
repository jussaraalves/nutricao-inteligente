let titulo = document.querySelector(".titulo");
	titulo.textContent = "Nutrição Inteligente";

let botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", function(){
    console.log("Clicou");
})

let pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){
    let paciente = pacientes[i]

    let tdPeso = paciente.querySelector(".info-peso").textContent;
    let tdAltura = paciente.querySelector(".info-altura").textContent;
    let tdImc = paciente.querySelector(".info-imc");
    
    let alturaEhValidade = true;
    let pesoEhValido = true
    
    if(tdPeso <= 0 || tdPeso >= 600){
        pesoEhValido = false
        tdImc.textContent = "Peso Inválido!"
        paciente.classList.add("paciente-invalido");
    }
    
    if(tdAltura <= 0 || tdAltura >= 3.00){
        alturaEhValidade = false
        tdImc.textContent = "Altura Inválida"
        paciente.classList.add("paciente-invalido");
        
    }
    
    if(alturaEhValidade && pesoEhValido){
        let imc = tdPeso / (tdAltura * tdAltura)
        tdImc.textContent = imc.toFixed(2)
    }
}
