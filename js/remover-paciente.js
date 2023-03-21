let paciente = document.querySelectorAll(".paciente");

let tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
   event.target.parentNode.remove();
});
