const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com"
let caminho = window.location.pathname




// Listando as reservas na página listar-reserva

if (caminho === '/admin.html'||caminho==='/listar-reserva.html'){
    
    const botaoReserva = document.querySelector('.btn.btn-dark')    
    console.log(botaoReserva)
    botaoReserva.onclick = async (evento) => {

    var opcoesReserva = {
        method: 'GET',
        redirect: 'follow'
      };

    const reservas = await fetch(`${BASE_URL}/bookings`, opcoesReserva)

    console.log(reservas)
  
    listaReservas = await reservas.json()

    console.log(listaReservas)
    }
}


