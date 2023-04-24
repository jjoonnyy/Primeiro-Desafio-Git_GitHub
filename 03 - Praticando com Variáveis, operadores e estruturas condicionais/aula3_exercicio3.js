/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efeturar o cálculo adequado.
Código Condição de pagamento:
- Á vista Débito, recebe 10% de desconto;
- À vista no dinheiro ou pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const valorProduto = 100;
const pagamento = 4;
const formaDebito = valorProduto - (valorProduto * 0.1);
const formaDinheiroPix = valorProduto - (valorProduto * 0.15);

if (pagamento === 1) {
    console.log('Pagamento realizado ' + pagamento + ' com sucesso, valor da compra R$ ' + formaDebito)
} else if (pagamento === 2) {
    console.log('Pagamento realizado no ' + pagamento + ' com sucesso, valor da compra R$ ' + formaDinheiroPix)
} else if (pagamento === 3) {
    console.log('Pagamento com parcelamento maior que 2x realizado com sucesso, valor da compra R$ ' + valorProduto)
} else{
    console.log('Pagamento com parcelamento maior que 2x realizado com sucesso, valor da compra R$ ' + (valorProduto + (valorProduto * 0.1)));
} 



