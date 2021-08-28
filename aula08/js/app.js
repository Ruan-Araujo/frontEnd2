function mudarCor(objDiv, cor){
    objDiv.style.backgroundColor = cor;
}

function mudarPosicao(obj){
    obj.style.position = "absolute";
    obj.style.left = Math.random() * 500 + "px";
    obj.style.top = Math.random() * 500 + "px";
}

function cumprimentar(){
    let data = new Date();
    let hora = data.getHours();
    if (hora < 12){
        let mensagem = "Bom dia";
    }else if (hora < 18){
        mensagem = "Boa tarde";
    }else{
        mensagem = "Boa noite";
    }
    alert('Olá ' + mensagem);
}