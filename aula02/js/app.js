let situacao = confirm('Para acessar o sistema - pressione OK');

if (situacao){
    // Redirecionar o usuário para página de acesso permitido
    window.location.href="acessoPermitido.html";
} else{
    // Redirecionare o usuario para pagina de acesso negado
    window.location.href="acessoNegado.html";
}