document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.ceil(numeroAleatorio);

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block'
    })
})