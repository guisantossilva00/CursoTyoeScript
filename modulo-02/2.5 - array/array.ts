// => Exemplo 01 - Uso de Colchetes:

let frutas: string[] = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia'];
console.log(frutas[2]);


// -> Exemplo 02 - Array Object (Objeto Array);

let frutas1: Array<string> = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia'];
console.log(frutas1[3]);

// => Exemplo 03 - Adicionando mais strings com método 'push'

let frutas2: Array<string> = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia'];
console.log(frutas2);
frutas2.push('Pera');
console.log(frutas2);
frutas2.push('Uva');
console.log(frutas2);

// => Exemplo 04 - Identifica tamanho do array - método 'length'

let frutas3: Array<string> = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia'];
console.log(frutas3.length);

// => Exemplo 05 - Exemplo de Array com Spread Operator

let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [ ... listaNumeros, 6, 7, 8, 9, 10 ];
console.log(listaNumeros);

// => Exemplo 06 - Exemplo de Array com laço de iteração

let linguagensArray: string[] = new Array('JavaScript', 'Python', 'PHP', 'C#');

function funcaoLinguagens(linguagens: string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}

funcaoLinguagens(linguagensArray);