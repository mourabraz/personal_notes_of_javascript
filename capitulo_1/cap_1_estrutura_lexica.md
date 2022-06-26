# Estrutura Léxica

> léxico, são as regras de uso e o significado que alguns palavras representam para uma determinada linguagem.

por exemplo:
- nome de variáveis válidos
- sequencia de comandos
- definição de funções
- palavras reservadas
- etc


  1 - ES é case-sensitive, isto é, escrever "While" ou "while" são coisas diferentes.
  
  2 - ES ignore na maioria dos casos, espaços extras e novas linhas, o que permite identar e escrever o código de uma forma mais legível ao gosto do programador.

  3 - reconhece '\t', '\n', '\r', '\r\n'

## A - Comentários
- comentários de linha com "//"
- comentários de múltiplas linhas com "/* */"

## B - Literiais
São os dados cujo valor aprece diretamente no código, por exemplo:

```js
'carlos'      // texto - string
42            // número - number
null          // ausência de valor Object
```

## C - Identificadores
Identificador é o nome que damos às variáveis, funções, classes, propriedades e labels para alguns loops.
Deve começar com uma letra, dolar ($) ou underscore (_), seguido de outras letras, dolar, underscore ou dígitos.

### palavras reservadas
As palavras reservadas em geral não podem ser usadas com oidentificadores, mas há casos em que é possível e há casos em que dependem da compatibilidade com versões anteriores. 

> Será conveniente **não utilizar** nenhuma das palavras reservadas como identificador

- lista de palavras reservadas
```js
as    async    await     break     case     catch     class     const     continue      debugger      default     delete      do        else      export      extends     flase       finally       for     from      function        get     if        import        in      instanceof        let         new       null        of        return        set       static        super       switch        target        this        throw       true      try       typeof      var     void      while     with      yield
```
- outras guardadas para o futuro

```js
enum    implements    interface     package     private     protected     public
```