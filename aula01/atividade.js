let notasAlunos = (notas) => {
    let nota1 = notas[0] + notas[1];
    console.log(nota1);
    let nota2 = nota1 + notas[2];
    console.log(nota2);
    let notaFinal = nota2 + notas[3];
    console.log(notaFinal);
    notaMedia = notaFinal / 4;
    console.log(notaMedia);
    let serasepassou = (notaMedia < 7 ? 'Reprovado' : 'Aprovado');
    console.log(`Parabéns pela conclusão dos bimestres, a soma de suas notas foi ${notaFinal} e sua média ${notaMedia} e você está ${serasepassou}`);
}

notasAlunos([1, 2, 4, 8]);