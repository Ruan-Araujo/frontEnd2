/* Objetivo
Construir um formulário e alterar suas propriedades com JavaScript.

Crie uma nova página HTML e adicione via JavaScript os seguintes elementos:

Crie um formulário com campos de input e botões de submit e reset.
Previna a página de ser recarregada quando houver o submit utilizando preventDefault().
Mostre um alerta na página quando a tela terminar de ser carregada.
Adicione uma cor a um texto quando o mouse ficar acima do mesmo e outra cor quando ele sair do mesmo.
Faça um trecho de código que utilize algum evento de teclado, esse evento irá escrever o conteúdo do 
input em uma tag p e 
logo abaixo o número de vezes que esse evento foi chamado. Exemplo: <p>futebol</p> <p>7</p> .
 */

// Criando o Formulário e seus atributos
let form = document.createElement("form");
form.setAttribute('id', 'form');
form.setAttribute('action', 'post');

// Adicionando o formulário ao body
document.body.appendChild(form);
document.body.style.background = 'black';
// Estilizando o formulario
form.innerHTML = `<h1>Login</h1>`
let h1 = document.querySelector('h1');
h1.style.padding = '10px 0 0 2px'
h1.style.textAlign = 'center'
form.style.width = '300px';
form.style.height = '350px';
form.style.margin = '0 auto';
form.style.borderRadius = '10px'
form.style.background = 'magenta';

// Adicionando onloading
document.body.onload = alert('Ok');

// Função para gerar labels
let criarLabel = (para, classe, texto) => {
    let label = document.createElement('label');
    label.setAttribute('for', para);
    label.setAttribute('class', classe);
    label.style.padding = '10px'
    label.innerText = texto;
    form.appendChild(label);
}

// Função para gerar inputs
let criarInput = (tipo, classe, nome, placeholder, id) => {
    let input = document.createElement('input');
    input.setAttribute('type', tipo);
    input.setAttribute('class', classe);
    input.setAttribute('name', nome);
    input.setAttribute('placeholder', placeholder);
    input.setAttribute('id', id);
    input.style.display = 'block';
    input.style.position = 'relative';
    input.style.margin = '10px 20px';
    input.style.padding = '5px'
    form.appendChild(input);
}

// Função para gerar botões
let criarBotoes = (tipo, classe, texto, href, id)=> {
    let botao = document.createElement('a');
    botao.setAttribute('type', tipo);
    botao.setAttribute('class', classe);
    botao.setAttribute('href', href);
    botao.setAttribute('id', id);
    botao.innerHTML = texto;
    botao.style.margin = '10px 5px 2px 5px';
    botao.style.padding = '3px'
    botao.style.color = 'magenta';
    botao.style.borderRadius = '5px';
    botao.style.textDecoration = 'none';
    botao.style.backgroundColor = 'black';
    form.appendChild(botao);
}
// Criando o campo nome acionando as funções
let nomeLabel = criarLabel('nome', 'label', 'Nome ');
let nome = criarInput('text', 'inputClass', 'nome', 'Seu nome', 'nome');

// Criando o campo email acionando as funções
let emailLabel = criarLabel('email', 'label', 'Email');
let email = criarInput('email', 'inputClass', 'email', 'Seu email', 'email');

// Criando o campo senha acionando as funções
let senhaLabel = criarLabel('password', 'label', 'Senha ')
let senha = criarInput('password', 'inputClass', 'password', 'Sua senha ', 'password');

// Criando botões acionando a função criarBotões
let botaoEnviar = criarBotoes('submit', 'btn', 'Enviar', '#', 'btn');
let botaoCancelar = criarBotoes('reset', 'btn', 'Cancelar', '#', 'btn1');

// Adicionando preventDefault
botaoEnviar = addEventListener('click', (evento) => {
    evento.preventDefault();
})

// Adicionando eventos de mouse
h1.onmouseover = () => {h1.style.color="whitesmoke"};
h1.onmouseout = () => {h1.style.color=''};

let guadarTagA = document.querySelectorAll('a');

for (const itens of guadarTagA) {
    itens.onmousemove = () => {itens.style.background="whitesmoke"};
    itens.onmouseout = () => {itens.style.background='black'};
}
// Adicionando evento de teclado
const criarP = document.createElement('p');
form.appendChild(criarP);

let guardaInput = document.querySelectorAll('input');
let contador = 1;
for (const elementos of guardaInput) {
    elementos.addEventListener('keypress', () => {
        criarP.textContent = 'Adicionado ' + contador++;
    })
}