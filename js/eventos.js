const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com"

async function listarEventos () {
    try {
        var opcoes = {
            method: 'GET',
            redirect: 'follow'
        };
        
        const eventos = await fetch(`${BASE_URL}/events`, opcoes)

        const listaEventos = await eventos.json()

        const noveEventos = listaEventos.slice(0,9)

        console.log(noveEventos)

        const paginaEventos = document.querySelector('#todos-eventos')
        noveEventos.forEach((evento) =>{

            //formatando a data que a API retorna
            const newDate = new Date(evento.scheduled)
            const formatNumber = (numero ) => { 
                if (numero < 10){
                    return "0"+numero
                }
                return numero
            }
            const dataFormatada = `${formatNumber(newDate.getDate())}/${formatNumber(newDate.getMonth())}/${newDate.getFullYear()}`
            
            

            //adicionando o painel de 9 eventos na div do html
            let eventoPainel = `<article class="evento card p-5 m-3">
            <h2>${evento.name} - ${dataFormatada}</h2>
            <h4>${evento.attractions.join()}</h4>
            <p>${evento.description}</p>
            <a href="#" class="btn btn-primary" x-data="${evento._id}">reservar ingresso</a>
            </article>` 
            paginaEventos.innerHTML+= eventoPainel
        })
    } catch {
        alert("Deu algo errado na lista de eventos!")
    } 
}

listarEventos()


