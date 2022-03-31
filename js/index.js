const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com"

let caminho = window.location.pathname

// Listando as reservas na página listar-reserva

if (caminho === '/listar-reserva.html'){
   
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
}



// Criando o banner rotativo na página principal

    let index=0
    const banner = document.querySelectorAll('.banner-rotativo img')
    let numImagens=banner.length
    let time = 2000

    window.addEventListener("load", ()=>{
        setInterval(() => {
            if(index<=numImagens-1){
                banner[index].removeAttribute('class')
                index++
                if(index == numImagens){
                    index=0;
                }
                banner[index].setAttribute('class','banner-img')
            }
            
        }, time)
    })


// Puxando o array de eventos cadastrados para mostrar o painel

async function listarEventos () {

    var opcoes = {
        method: 'GET',
        redirect: 'follow'
    };
    
    const eventos = await fetch(`${BASE_URL}/events`, opcoes)

    const listaEventos = await eventos.json()

    console.log(listaEventos)
    const tresEventos = listaEventos.slice(0,3)

    console.log(tresEventos)

    const paginaEventos = document.querySelector('#container-eventos')
    tresEventos.forEach((evento) =>{

        //formatando a data que a API retorna
        const newDate = new Date(evento.scheduled)
        const formatNumber = (numero ) => { 
            if (numero < 10){
                return "0"+numero
            }
            return numero
        }
        const dataFormatada = `${formatNumber(newDate.getDate())}/${formatNumber(newDate.getMonth())}/${newDate.getFullYear()}`

        //adicionando o painel de 3 eventos na div do html
        let eventoPainel = `<article class="evento card p-5 m-3">
        <h2>${evento.name} - ${dataFormatada}</h2>
        <h4>${evento.attractions.join()}</h4>
        <p>${evento.description}</p>
        <a href="#" class="btn btn-primary" x-data="${evento._id}">reservar ingresso</a>
        </article>` 
        paginaEventos.innerHTML+= eventoPainel
    })

    

    

}

listarEventos()