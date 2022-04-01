const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

const myModal = document.querySelector("#myModal");
const modalContent = document.querySelector("#modalContent");
const btnClose = document.querySelector("#close");
const inputReserva = document.querySelector("#reserva");

const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputQtd = document.querySelector("#qtd");

inputReserva.onclick = async (evento)=>{
    evento.preventDefault();
    myModal.style.display = 'block';

    try{
        reserva = {
            owner_name: inputNome.value,
            owner_email: inputEmail.value,
            number_tickets: inputQtd.value,
            event_id: idEvento
        };

        console.log(reserva);

        const options = {
            method: 'POST',
            body: JSON.stringify(reserva),
            headers: {
                "Content-Type": "application/json",
            }
        };

        const resposta = await fetch(`${BASE_URL}/bookings`,options);
        console.log(resposta);

        alert("Reserva confirmada! Bom show!");

    } catch {
        alert("Preencha os campos corretamente");
    }
};

btnClose.addEventListener("click", (evento)=>{
    evento.preventDefault();
    myModal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == myModal) {
      myModal.style.display = "none";
    }
  };