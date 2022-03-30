const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com"

async function listarReserva (){ 
    
    try{
        var opcoesReserva = {
            method: 'GET',
            redirect: 'follow'
        };

        const reservas = await fetch(`${BASE_URL}/bookings`, opcoesReserva)
        
        listaReservas = await reservas.json()

        console.log(listaReservas)

        listaReservas.forEach ((reserva) => {

        const novoPainel = `<tr>
        <th scope="row">${reserva._id}</th>
        <td>${reserva.owner_name}</td>
        <td>${reserva.owner_email}</td>
        <td>${reserva.number_tickets}</td>
        </tr>`

        const table = document.querySelector('tbody')
        table.innerHTML+=novoPainel
        })
    } catch (erro) {
        alert(`Ops! Ocorreu um erro: \n${erro}`)
    }


}
listarReserva ()