/*1 - Faça aum algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculadade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
Média = (nota 1 + nota 2 + nota 3) / 3;
classificação:
 - Média menor que 5, reprovaçao;
 - Média entre que 5 e 7, recuperação;
 - Média maior que 7, passou de semestre;
 */

const nota1 = 7;
const nota2 = 7;
const nota3 = 5.87;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log("Aluno reprovado, a média tirada foi " + media.toFixed(2));

} else if (media >= 5 && media <= 7) {
    console.log("Aluno em recuperação, a média tirada foi " + media.toFixed(2));
} else {
    console.log("Aluno Aprovado, a média tirada foi " + media.toFixed(2)) + " passou de semestre";

}
