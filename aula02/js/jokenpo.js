let pontosPessoa = 0;
let pontosMaquina = 0;

while((pontosPessoa < 3) || (pontosMaquina < 3)){

    let arrayEscolhas = ['pedra','papel','tesoura'];
    let escolhaDoRobo = Math.floor(Math.random() * arrayEscolhas.length);
    let escolhaDoJogador = prompt("Escolha entre pedra/papel/tesoura");

    switch(escolhaDoJogador) {
        case 'pedra':
            if (arrayEscolhas[escolhaDoRobo] == 'papel')
            {
                alert("maquina escolheu: " + arrayEscolhas[escolhaDoRobo])
                alert("Maquina ganha!");
                pontosMaquina++;
            }
            else if(arrayEscolhas[escolhaDoRobo] == 'tesoura'){
                alert("maquina escolheu: " + arrayEscolhas[escolhaDoRobo])
                alert("Pessoa ganha!");
                pontosPessoa++;
            }
            else {
                alert("maquina escolheu: " + arrayEscolhas[escolhaDoRobo])
                alert("Empate!");
            }
            break;
        case 'papel':
            if (arrayEscolhas[escolhaDoRobo] == 'tesoura')
            {
                alert("maquina escolheu: " + arrayEscolhas[escolhaDoRobo])
                alert("Maquina ganha!");
                pontosMaquina++;
            }
            else if(arrayEscolhas[escolhaDoRobo] == 'pedra'){
                alert("maquina escolheu: " + arrayEscolhas[escolhaDoRobo])
                alert("Pessoa ganha!");
                pontosPessoa++;
            }
            else {
                alert("maquina escolheu: " + arrayEscolhas[escolhaDoRobo])
                alert("Empate!");
            }
            break;
        case 'tesoura':
            if (arrayEscolhas[escolhaDoRobo] == 'pedra')
            {
                alert("maquina escolheu: " + arrayEscolhas[escolhaDoRobo])
                alert("Maquina ganha!");
                pontosMaquina++;
            }
            else if(arrayEscolhas[escolhaDoRobo] == 'papel'){
                alert("maquina escolheu: " + arrayEscolhas[escolhaDoRobo])
                alert("Pessoa ganha!");
                pontosPessoa++;
            }
            else {
                alert("maquina escolheu: " + arrayEscolhas[escolhaDoRobo])
                alert("Empate!");
            }
            break;
    }

    if(pontosPessoa == 3){
        alert("pessoa fez um total de 3 pontos e ganhou!");
    }
    else if(pontosMaquina == 3) {
        alert("maquina fez um total de 3 pontos e ganhou!");
    }
    else
    {
        alert("nenhum dos dois fez 3 pontos ainda!");
    }
}