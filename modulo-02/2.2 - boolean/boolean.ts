// doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean

// => Exemplo 01

let tarefaConluida: boolean = true;
let tarefaPendente: boolean = false;

console.log(tarefaConluida);
console.log(tarefaPendente);

// => Exemplo 02

let concluido: boolean = false;

if(concluido) {
    console.log("Tarefa foi concluida com sucesso!");
} else {
    console.log('Tarefa Pendente!');
}