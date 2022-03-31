const inputName = document.querySelector("#nome")
const inputBanner = document.querySelector("#banner")
const inputAttractions = document.querySelector("#atracoes")
const inputDescription = document.querySelector("#descricao")
const inputDate = document.querySelector("#data")
const inputTickets = document.querySelector("#lotacao")

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com"

const form = document.querySelector("form")

const parameter = new URLSearchParams(window.location.search)
const id = parameter.get("id")

const showEvent = async () => {
  const response = await fetch(`${BASE_URL}/events/${id}`, {
    method: "GET",
  })
  const respAPI = await response.json()

  inputName.value = respAPI.name
  inputAttractions.value = respAPI.attractions
  inputDescription.value = respAPI.description
  inputDate.value = respAPI.scheduled
  inputTickets.value = respAPI.number_tickets
}

showEvent()

form.onsubmit = async (event) => {
  event.preventDefault()
  await fetch(`${BASE_URL}/events/${id}`, { method: "DELETE" })
  window.location.href = "admin.html"
}
