/* Construa um formulário, usando javascript, 
com no mínimo três campos de input e esses campos de input 
terão comportamentos a decorrer de algumas condições. 
Construa esses inputs de uma forma que quando forem preenchidos com algum conteúdo, 
os campos receberão a propriedade “disabled”, 
mas quando o mouse estiver acima desse campo ele vai perder 
essa propriedade possibilitando a modificação do conteúdo pelo usuário. 
Quando o mouse sair do input e o mesmo tiver preenchido, ele receberá a 
propriedade disabled novamente. */

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
form.style.background = 'cyan';

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
let criarBotoes = (tipo, classe, texto, id)=> {
    let botao = document.createElement('button');
    botao.setAttribute('type', tipo);
    botao.setAttribute('class', classe);
    botao.setAttribute('id', id);
    botao.innerHTML = texto;
    botao.style.margin = '10px 5px 2px 5px';
    botao.style.padding = '3px'
    botao.style.color = 'cyan';
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
let botaoEnviar = criarBotoes('submit', 'btn', 'Enviar','btn');
let botaoCancelar = criarBotoes('reset', 'btn', 'Cancelar','btn1');

/* Construa esses inputs de uma forma que quando forem preenchidos com algum conteúdo, 
os campos receberão a propriedade “disabled”, 
mas quando o mouse estiver acima desse campo ele vai perder 
essa propriedade possibilitando a modificação do conteúdo pelo usuário. 
Quando o mouse sair do input e o mesmo tiver preenchido, ele receberá a 
propriedade disabled novamente*/
let inputs = document.querySelectorAll('input');

for (const itens of inputs) {
    itens.onmouseover = () => {itens.disabled = false};
    itens.onmouseout = () => {itens.value == '' ? itens.disabled = false : itens.disabled = true};
}

