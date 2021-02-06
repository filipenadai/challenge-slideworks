<h1 align="center">
  Desafio Slideworks
</h1>
<p align="center">
  <img src="https://i.imgur.com/5MwuIoo.png" />
</p>

#### O desafio consistia em criar uma aplicação que integrasse ao trello e criasse cards em boards existentes.

## Solução
Fui até a Api do Trello e comecei a procurar o as maneiras que eu poderia fazer a criação deste card.

Com isso criei um serviço onde eu recebia um ```boardId``` da minha própria aplicação e verificava se essa "board" existia, caso sim eu verifico se existe "lists" nela.
Caso eu tenha a list eu pego o ```id``` dela e faria a criação utilizando a própria api, se não eu criava a list e fazia o outro processo natural.

## Tema
Fiz o desafio sobre o próprio tema de candidatos em um processo seletivo.
A aplicação recebe o nome do candidato e seu email de contato e cria um "list" de candidatos, para cada candidato cadastrado para contato é feito um "card" com suas informações de contato.

## Frontend
Quis fazer algo simples e intuitivo mas também queria mostrar toda a capacidade que o React pode oferecer.

Dito isso eu criei alguns componentes como ```Button``` e ```Input``` e um hook de ```Toast``` para ser utilizado.
Os inputs estão com uma configuração para alterar a cor caso ocorra algum erro.
O button está desabilitando caso ja feita a requisição e troca seu texto para "Carregando".
A partir da chamada à api o toast entra em ação trazendo a resposta.

<p align="center">
  <img height="400px" src="https://i.imgur.com/fUZTGax.png" />
</p>

## Uso da aplicação

Para utilizar a aplicação você pode clonar meu projeto e instalar todas as dependencias com ```yarn start``` ou ```npm install```.
Após isso você precisará de uma ApiKey e uma ApiToken do Trello.
Quando tudo isso estiver em mãos você pode criar um board e pegar o seu Id na rota da aplicação do Trello.
Na pasta ```configs``` do backend você criará um arquivo ```constants.ts``` e seguir o exemplo que tem em ```constants.example.ts``` ou apenas apagar o ```example``` do nome do arquivo.

Após isso você pode dar os comandos: ```yarn dev:server``` no backend para incicia-lo e ```yarn start``` no front end para inicia-lo tambem.

## Contribua

Caso se interessou nessa aplicação simples e tenha tido alguma ideia você pode contribuir, basta seguir estes passos:

1. Fork
2. Crie sua branch `git checkout -b my-feature`
3. Comite suas alterações `git commit -am 'Add some new feature'`
4. De um push em sua branch `git push origin my-feature`
5. Por fim faça um pull request.

## Autor
---

<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/48576140?s=460&u=c5d619abfa89d1da3f9ff6e1b3ba51f66607050b&v=4" width="80px;" alt="Nadai" />

<sub><b>Filipe Gabriel de Nadai</b></sub>
