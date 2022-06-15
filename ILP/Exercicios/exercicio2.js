//Entrada de dados
// Nota1
// Nota2
// Nota3

//Processamento
// Calcular a media

//saída
//Mostrar se o aluno foi aprovado ou reprovado

// Algoritmo:
// Leia Nota1
// Leia Nota2
// Leia Nota3
// TotalNotas = Nota1 + Nota2 + Nota3
//Media = TotalNotas / 3

// Se Media >= 7 entao
    // escreva "Aprovado"
// senao
    // escreva "Reprovado"


var notas1 = 7;
var notas2 = 7;
var notas3 = 7;
// var notas3 = 3;

var media = (notas1 + notas2 + notas3) /3

if (media >=7) {
    return console.log(`Você está aprovado pois sua notá é ${media}`);
    
} else {
    return console.log(`Você está reprovado pois sua nota é ${media}`);    
}


