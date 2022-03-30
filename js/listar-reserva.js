const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com"
async function listarReserva (){ 
    
    try{
    
        //pegando o id da URL

        const parametros = new URLSearchParams(window.location.search)
        const idEvento = parametros.get('id')
    
        
        //chamando fetch

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");   
        
        var opcoesReserva = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const reservas = await fetch(`${BASE_URL}/bookings/event/${idEvento}`, opcoesReserva)

        const listaReservas = await reservas.json()

        
        //imprimindo as reservas do evento

        listaReservas.forEach ((reserva) => {

        const novaReserva = `<tr>
        <th scope="row">${reserva._id}</th>
        <td>${reserva.owner_name}</td>
        <td>${reserva.owner_email}</td>
        <td>${reserva.number_tickets}</td>
        </tr>`

        const table = document.querySelector('tbody')
        table.innerHTML+=novaReserva
        })
    } catch (erro) {
        alert(`Ops! Ocorreu um erro: \n${erro}`)
    }


}
listarReserva ()