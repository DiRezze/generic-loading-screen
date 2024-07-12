const funFacts = [
    `As telas de carregamento são uma desculpa perfeita para abrir suas redes sociais e começar a scrollar seu feed infinitamente.`,
    `Vamos lá! Você pode esperar isso sem pegar seu celular e abrir o feed.`,
    `Não, virar os olhos para o lado e fingir que não está se importando não vai fazer isso carregar mais rápido.`,
    `As telas de carregamento são usadas para indicar que o conteúdo está sendo carregado.`,
    `Algumas telas de carregamento incluem mensagens informativas ou dicas úteis enquanto o usuário espera.`,
    `Normalmente, você pode encontrar mensagens como "Carregando..." em telas de carregamento como esta.`
]

function getNewFact(){

    let randomIndex = Math.floor(Math.random() * funFacts.length);

    if(randomIndex === getNewFact.lastIndex){
        randomIndex = (randomIndex+1) % funFacts.length;
    }
    
    getNewFact.lastIndex = randomIndex;

    const selectedFact = `<p>${funFacts[randomIndex]}</p>`;
    document.getElementById('funFactContainer').innerHTML = selectedFact;

}

window.onload = function() {
    getNewFact();
};

setInterval(getNewFact, 8000);