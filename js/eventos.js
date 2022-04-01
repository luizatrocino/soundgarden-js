 
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com"
const inputReserva = document.querySelector("#reserva");
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputQtd = document.querySelector("#qtd");
const inputId = document.querySelector("#event-id");

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
             <a x-data="${evento._id}" class="btn btn-primary" id="nova_reserva">reservar ingresso</a>
             </article>` 
             paginaEventos.innerHTML+= eventoPainel
        })

        const btnReserva = document.querySelectorAll('#nova_reserva')
        const myModal = document.querySelector("#myModal");
        const btnClose = document.querySelector("#close");
       

            
        myModal.style.display = "none"

        btnReserva.forEach ( (botao) => {
            botao.onclick = async (evento)=>{
            myModal.style.display = 'block';
            evento.preventDefault();
            inputId.value=botao.getAttribute('x-data')
        }
        })

    
        inputReserva.onclick= async (evento)=>{
            try{
                var reserva = {
                    owner_name: inputNome.value,
                    owner_email: inputEmail.value,
                    number_tickets: inputQtd.value,
                    event_id: inputId.value
                };

                console.log(reserva);

                var options = {
                    method: 'POST',
                    body: JSON.stringify(reserva),
                    headers: {
                        "Content-Type": "application/json",
                    }
                };

                const resposta = await fetch(`${BASE_URL}/bookings`,options);
                console.log(resposta)
                myModal.style.display = 'block';
                alert("Reserva confirmada! Bom show!");
                myModal.style.display = "none";

            } catch {
                alert("Preencha os campos corretamente");
            }
        };

        btnClose.addEventListener("click", (evento)=>{
            evento.preventDefault();
            myModal.style.display = "none";
        });

        window.onclick = (event) => {
            if (event.target == myModal) {
              myModal.style.display = "none";
            }
          };
    
    } catch {
        alert("Deu algo errado na lista de eventos!")
    } 
}

listarEventos()


