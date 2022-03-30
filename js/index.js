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

if (caminho==='/index.html'||caminho==='/'){

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




}
  
