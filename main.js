function createGame(player1, hour, player2) {
  return `
<li>
              <!--"li" Itens da lista-->
              <!-- src é onde inserimos o local de origem da imagem, alt é o que escreveremos para o usuário caso a imagem não carregue-->
              <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
              <!-- "./" indica que o arquivo chamado esta na pasta raiz do diretório-->
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
            </li>
            `
}

let delay = -0.2
function createCard(date, day, games) {
  delay = delay + 0.2
  return `
          <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            <!--"ul" lista não ordenada-->
            ${games}     
          </ul>
        </div>
        `
}

document.querySelector("#app").innerHTML = `
<header>
        <!--HEADER é o cabeçalho-->
        <img src="./assets/logo.svg" alt="logo da NLW" />
      </header>
      <main id="cards">
    ${createCard("24/11", "Quinta", createGame("Brazil", "16:00", "Serbia"))}
    ${createCard(
      "28/11",
      "Segunda",
      createGame("Switzerland", "13:00", "Brazil")
    )}
    ${createCard("02/12", "Sexta", createGame("Brazil", "16:00", "Cameroon"))}
</main>
`
