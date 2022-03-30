const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com"

const inputNome = document.querySelector("#nome");
const inputAtracao = document.querySelector("#atracao");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");

criarEvento.onclick = async (evento) => {

   if(inputNome != "",
   inputAtracao != "",
   inputDescricao != "",
   inputData != "",
   inputLotacao != ""){
       return;
   }

   alert("Foi")
}