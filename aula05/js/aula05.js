let botaoDarkMode = document.querySelector('.btn');

document.addEventListener("click", () =>{
    let backGround = document.querySelector('body');
    backGround.style.backgroundColor = 'black';
    let h1 = document.querySelector('h1');
    h1.style.color = 'purple';
    let botao = document.querySelector('.btn');
    botao.style.color = 'white';
    botao.style.backgroundColor = 'black';
    let lis = document.querySelectorAll('li');
    for(const element of lis){
        element.style.color = 'purple';
        element.style.backgroundColor = 'black';
    }
})


