<a href ="https://www.linkedin.com/in/henrickyl/"><img src="https://image.flaticon.com/icons/svg/174/174857.svg" width="20" style="margin-right:5px"></a>
[![PayPal.me](https://img.shields.io/badge/paypal-donate-119fde.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=5EYBZRRUNZ7UA&currency_code=BRL&source=url)

# Relatório de Progresso
<div style="display:flex; flex-direction:row;">
<img src="3_search.jpeg" width="200px">
<img src="1_home.jpeg" width="200px">
<img src="2_monitor.jpeg" width="200px">
</div>


<hr>

## Day 1
(07 Ago 2020)

* Recebi a proposta da atividade.
* Pretendo usar o modelo de PWA
* preparei o projeto express
* Fiz os primeiros testes de frontend

## Day 2 

* Conclui o frontEnd para experimentar visualizar o load dos dados direto no app.
    - não comecei recebendo os dados pela base de dados parecer muito grande
* Me deparei com um erro de CORs ao tentar usar o fetch para receber os dados
* Acredito ter resolvido o problema do CORs usando proxi
* agora tenho que tratar o problema da base da dados ser grande demais, não posso fazer uma leitura geral.

## Day 3 e 4 Dias

* Foi bem trabalhoso conseguir a achar uma solução para a leitura dos dados, pois a API, foi propositadamente, feita para não poder fazer uma leitura geral de dados. Após muita pesquisa descobri que bastava colocar um timeout maior no segundo parametro do fetch.
* Antes de conseguir ler os dados, estava tentando montar o front-end com base no que sabia dos dados, e ver eles finalmente chegando foi sensacional.

## Day 5

* Termino da organização do Front-End (mostrar os dados)
* Trabalhar com os requisitos:
    - Pesquisa
    - filtrar dados



<hr>

## Requisitos:

Para executar este projeto basta ter o **node.js**, **VScode** e um **navegador** (chromer). Além disto, algumas dependências são nescessárias.

~~~bash
npm install nodemon express nunjucks
~~~