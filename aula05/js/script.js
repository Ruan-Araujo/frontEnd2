function escreverHtml(titulo, texto){
    const body = document.getElementById('#body');
    let meuTemplate = `
        <h1>${titulo}</h1>
        <p>${texto}</p>
    `;
    document.body.innerHTML += meuTemplate;
}

escreverHtml('Olá', 'isso é uma exemplo de template string em HTML');
escreverHtml('É dinâmico', 'Podemos inserir elementos HTML mediante o <strong>JavaScript</strong>');
escreverHtml('Facilita a programação', 'Evita escrever muito código ao reutilizar o que escrevemos');
escreverHtml('Nesse exemplo', 'Utilizamos uma única função para poder escrever 4 vezes em HTML, já imaginou como seria escrever 4x sem essa função?')