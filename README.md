# AC3 - Formulários HTML5

Atividades sobre formulários no HTML5. A atividade consiste em 5 formulários que devem ser construídos usando as melhores práticas e as novas tags de inputs do HTML5.

## Entrega

A entrega do exercício deve ser feito via git, usando o Github Classroom da sua turma e semestre.

## Modo de fazer

Para fazer os exerícios, alterem apenas os arquivos *html* que estão disponíveis dentro da pasta *src*. Em cada arquivo existe um _form_ com um _id_ já especificado, não altere esse id, pois ele será usado na correção. Escrevam as tags necessárias dentro destes formulários, incluindo os atributos do form (menos o _id_).

Não mexam em nenhum outro arquivo, pois todos eles são necessários para os testes rodarem.

## Como rodar os testes

Os testes foram construídos usando um framework de testes de javascript chamado Jasmine. Para executá-lo vocês devem executar um servidor HTTP e navegar até o arquivo *TestesAC3.html*.

Para fazer isso no Python, vocês podem usar o seguinte comando na pasta do exercício:

´´´
    python -m http.server
´´´

Isso irá iniciar um servidor local com os arquivos de teste. Para ver o teste sendo executado, abra o navegador na URL _http://localhost:8000/TestesAC3.html_.

## Regras Gerais

Cada exerício terá um enunciado que deverá ser respeitado. Os testes indicarão se vocês estão conseguindo fazer os exercícios. O exercício é considerado correto quando todos os testes dele passam.

Além do que for especificado em cada exercício, as seguintes caracterísitcas devem ser observadas:

* Todos os campos não botão devem ter um *label* conectado ao input designado cmo visto em sala de aula.
* Toda submissão desses formulários deve ser feita por POST.
* Use as TAG's HTML5 mais coerentes com o tipo de dado a ser obtido.

## Autores

Para rastreamento dos autores, escreva no arquivo *autores.json* a lista de autores responsáveis por esse exercício. Siga o modelo presente e coloque o nome e RA de cada um dos membros.