const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

const opcoes = {
    method: "GET",
}

const myModal = document.querySelector("#myModal");
const modalContent = document.querySelector("#modalContent");
const closeBtn = document.querySelector("#closeBtn");
const btnReserva = document.querySelector("#btnReserva");

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const qtdIngressos = document.querySelector("#qtd");
let idEvento = ""

const eventoAbrirModal = (id) => {
    const btnModal = document.querySelector(`#btn${id}`);
    console.log(btnModal)
    btnModal.addEventListener("click", (evento)=>{
        myModal.style.display = "block";
        console.log(btnModal.id.slice(3));
        idEvento = btnModal.id.slice(3);
    });
    
}

btnReserva.addEventListener("click", async (evento)=>{
    evento.preventDefault();
    try{
        reserva = {
            owner_name: nome.value,
            owner_email: email.value,
            number_tickets: qtdIngressos.value,
            event_id: idEvento
        };
        console.log(reserva);
        const reqOptions = {
            method: 'POST',
            body: JSON.stringify(reserva),
            headers: {
                "Content-Type": "application/json",
            }
        };

        const resposta = await fetch(`${BASE_URL}/bookings`,reqOptions);
        console.log(resposta);

        alert('Reservada realizada')
        window.location.href = "index.html"
    }catch {
        alert('Erro na reserva: reveja os campos e tente novamente')
    }
});

closeBtn.addEventListener("click", (evento)=>{
    evento.preventDefault();
    myModal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == myModal) {
      myModal.style.display = "none";
    }
  }