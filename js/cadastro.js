const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com"

const inputNome = document.querySelector("#nome")
const inputAtracoes = document.querySelector("#atracoes")
const inputDescricao = document.querySelector("#descricao")
const inputData = document.querySelector("#data")
const inputLotacao = document.querySelector("#lotacao")
const criarEvento = document.querySelector("#enviar")

criarEvento.onclick = async (evento) => {
  evento.preventDefault()

  try {
    const novoEvento = {
      name: inputNome.value,
      poster: "link da imagem",
      attractions: inputAtracoes.value.split(","),
      description: inputDescricao.value,
      scheduled: new Date(inputData.value).toISOString(),
      number_tickets: parseInt(inputLotacao.value),
    }

    const options = {
      method: "POST",
      body: JSON.stringify(novoEvento),
      headers: {
        "Content-Type": "application/json",
      },
    }

    const resposta = await fetch(`${BASE_URL}/events`, options)
    const conteudoResposta = await resposta.json()
    console.log(conteudoResposta)
    // alert(`Evento cadastrado com sucesso!`)
    window.location.href = "admin.html"
    
  } catch {
    alert("Preencha os campos corretamente")
  }
}
