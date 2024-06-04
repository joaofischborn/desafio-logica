// Calculadora de partidas rankeadas

function getPlayerNivel(number) {
    if (number < 10) return 'Ferro';
    if (number <= 20) return 'Bronze';
    if (number <= 50) return 'Prata';
    if (number <= 80) return 'Ouro';
    if (number <= 90) return 'Diamante';
    if (number <= 100) return 'Lendário';
    return 'Imortal';
}

function getRankedBalance(wins, loses){
    let rankedBalance = wins - loses
    let nivel = getPlayerNivel(rankedBalance)
    console.log(`O Herói tem de saldo de ${rankedBalance} está no nível de ${nivel}`)
}

getRankedBalance(19, 2)
