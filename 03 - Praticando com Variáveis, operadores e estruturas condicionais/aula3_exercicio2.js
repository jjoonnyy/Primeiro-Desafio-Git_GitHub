/*
2 - O IMC - Indíce de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC

IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condiação:
- Abaixo de 18.5 abaixo co peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;

*/

const peso = 100.5;
const altura = 1.40;
const imc = peso / Math.pow(altura, 2); //Math.pow(altura,2) - potencia da altura vezes a potencia matemática(ao quadrado).

if (imc < 18.5) {
    console.log("Seu peso é " + imc.toFixed(2) + ", está abaixo do peso");

} else if (imc >= 18.5 && imc <= 25) {
    console.log("Entre 18.5 e 25. O seu peso " + imc.toFixed(2) + ", está no peso normal");

}else if (imc > 25 && imc <= 30) {
    console.log("Entre 25 e 30. O seu peso " + imc.toFixed(2) + ", Acima do peso");
}else if(imc > 30 && imc <= 40){
    console.log("Entre 30 e 40. O seu peso " + imc.toFixed(2) + ", Obeso");
}else{
    console.log("Seu peso é " + imc.toFixed(2) + ", está com obesidade Grave");
}