const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com"

async function listarEventos () {

    var opcoes = {
        method: 'GET',
        redirect: 'follow'
    };
    
    const eventos = await fetch(`${BASE_URL}/events`, opcoes)

    const listaEventos = await eventos.json()

    const tabelaEventos = document.querySelector('tbody')
    //contador para servir de id para o evento
    let contador = 1 

    listaEventos.forEach((evento) =>{

        //formatando a data que a API retorna
        const newDate = new Date(evento.scheduled)
        const formatNumber = (numero ) => { 
            if (numero < 10){
                return "0"+numero
            }
            return numero
        }
        const dataFormatada = `${formatNumber(newDate.getDate())}/${formatNumber(newDate.getMonth())}/${newDate.getFullYear()}`
        const horaFormatada = `${formatNumber(newDate.getHours())}:${formatNumber(newDate.getMinutes())}`
        
        //adicionando todos os eventos cadastrados
        let itemEvento = `<tr>
        <th scope="row">${contador}</th>
        <td>${dataFormatada} ${horaFormatada}</td>
        <td>${evento.name}</td>
        <td>${evento.attractions.join()}</td>
        <td>
            <a href="listar-reserva.html?id=${evento._id}" class="btn btn-dark">ver reservas</a>
            <a href="editar-evento.html" class="btn btn-secondary">editar</a>
            <a href="excluir-evento.html" class="btn btn-danger">excluir</a>
        </td>
        </tr>` 
        
        tabelaEventos.innerHTML+= itemEvento

        contador++
    }) 
}

listarEventos ()
