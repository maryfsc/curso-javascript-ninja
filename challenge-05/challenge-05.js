/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ['olá', 878, false, 'js ninja é super legal!', 45]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(array)[1]); // 878

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function returnArrayIndex(arr, i) {
    return arr[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var anotherArray = [null, 'Mary', 45, true, { 'greeting': 'hello' }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
returnArrayIndex(anotherArray, 0); // null
returnArrayIndex(anotherArray, 1); // 'Mary'
returnArrayIndex(anotherArray, 2); // 45
returnArrayIndex(anotherArray, 3); // true
returnArrayIndex(anotherArray, 4); // { 'greeting': 'hello' }

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(name) {
    var bookInfo = {
        'O Silmarillion': {
            'quantidadePaginas': 450,
            'autor': 'J. R. R. Tolkien',
            'editora': 'Martins Fontes'
        },
        'O Conto da Aia': {
            'quantidadePaginas': 370,
            'autor': 'Margaret Atwood',
            'editora': 'Rocco'
        },
        'A Longa Viagem a um Pequeno Planeta Hostil': {
            'quantidadePaginas': 200,
            'autor': 'Becky Chambers',
            'editora': 'Dark Side'
        }
    }
    
    return !name ? bookInfo : bookInfo[name];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro \'O Silmarillion\' tem ' + book('O Silmarillion').quantidadePaginas + ' páginas!');
// O livro 'O Silmarillion' tem 450 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('A autora do livro \'O Conto da Aia\' é ' + book('O Conto da Aia').autor + '.');
// A autora do livro 'O Conto da Aia' é Margaret Atwood.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro \'A Longa Viagem a um Pequeno Planeta Hostil\' foi publicado pela editora ' + book('A Longa Viagem a um Pequeno Planeta Hostil').editora + '.');
// O livro 'A Longa Viagem a um Pequeno Planeta Hostil' foi publicado pela editora Dark Side.
