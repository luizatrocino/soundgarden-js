const inputName = document.querySelector("#nome");
const inputBanner = document.querySelector("#banner");
const inputAttractions = document.querySelector("#atracoes");
const inputDescription = document.querySelector("#descricao");
const inputDate = document.querySelector("#data");
const inputTickets = document.querySelector("#lotacao");

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const form = document.querySelector("form");

const parameter = new URLSearchParams(window.location.search);
const id = parameter.get("id");

const showEvent = async () => {
    const response = await fetch(`${BASE_URL}/events/${id}`, {method: "GET"});
    const respAPI = await response.json();    
     

    inputName.value = respAPI.name;
    inputBanner.value = respAPI.poster;
    inputAttractions.value = respAPI.attractions;
    inputDescription.value = respAPI.description;
    inputDate.value = respAPI.scheduled;
    inputTickets.value = respAPI.number_tickets;
};

showEvent();


form.onsubmit = async (event) =>{
    event.preventDefault();
       
   const editEvent = {
       name: inputName.value,
       poster: inputBanner.value,
       attractions: inputAttractions.value.split(","),
       description: inputDescription.value,
       scheduled: new Date(inputDate.value).toISOString(),
       number_tickets: parseInt(inputTickets.value) 
    };

    const options = {
        method: 'PUT',
        body: JSON.stringify(editEvent),
        headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow"
    };

   const response = await fetch(`${BASE_URL}/events/${id}`, options);
   const contResp = await response.json();
   console.log(contResp)
   alert(`Evento atualizado com sucesso!`)
   window.location.href = ("admin.html")
}