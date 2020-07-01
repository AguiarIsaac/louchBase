# Desafios do treinamento LouchBase da **Rocketseat**.

## Desafios do módulo-1 Introdução a linguagem de programação JavaScript

### Criação de variáveis
* Var - valor pode ser alterado, escopo global:

```
 var text = 'value'
```	
* Let - Valor pode ser alterado, visivel apenas dentro de seu escopo:

```
let text = 'value'
```

* Const - Valor não muda diretamente, escopo global:

```
const text = 'value'
```
### Criação de Arrays:
```
const list = [1, 2, 3, 4, 5...]
```
### Criação de Objetos:
```
const students = { // A constante em si não pode mudar seu valor, porem as propiedades dentro dela sim, como mudar as notas, idade ou nome.
    name: 'student',
    age: 15,
    class: '5°-b'
    grades: [10, 7, 6, 3]
}
```
### Funções e parametros:
```
function nameFunction(parameters) {
    code block
}
nameFunction(parameters) // Executa a função
```

### Template strings: // Com template strings é possivel realizar expressões dentro da string
```
`The student have ${varNota}!!`
```

### Estrutura de condição IF:
```
if(condition) {
    code block
}
```

### Estrutura de repetição FOR:
```
for(boot; condition; expression) {
    code block
}
```

## Desafios do Módulo-2 Introdução a HTML5 e CSS3

### HTML semantico:
```
<html>
    <head>
        Metadados
    </head>
    <body>
        <header>
            <nav></nav>
        </header>

        <main>
            <article></article>
            <article></article>
        </main>

        <footer>
            <ul>
                <li></li>
            </ul>
        </footer>
    </body>
</html>
```

* Classes
* Id
* Endentação de HTML

### CSS - Folha de estilos

* Estilização de páginas
* Grid Layout
* Animações
* Reações a ações realizadas na página

## Desafios do módulo-3

* Instalação e configuração do [Node.Js](https://nodejs.org/en/)
* instalação do Express
* Nodemon
* Template Engine [Nunjucks](https://mozilla.github.io/nunjucks/)

### Configuração do servidor:

* Importação de funções
* Configuração da template engine
* Importação de arquivos externos(folhas de estilos e scripts)
* abertura de portas
* Configuração de rotas

### Estrutura de Páginas dinâmicas
### Dados inseridos de forma dinâmica no documento HTML

## Desafios do módulo-4

### Separação das rotas do arquivo Server
### Animações com CSS
### Pseudo elementos