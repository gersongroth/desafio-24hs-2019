# desafio-24hs-2019

## Observações

É necessário possuir o node instalado. Ao entrar em cada projeto, rode npm install para instalar todas as dependências.

## Iniciando o app
Pelo terminal, entre na pasta /app e Use o comando abaixo para iniciar o aplicativo. Ele irá ouvir a porta 3000, aguardando notificações de sensores (ele apenas loga os dados recebidos)

```
npm start
```

## Iniciando os sensores
Para cada sensor que deseja criar, utilize o comando abaixo:

```
npm start
```

Isso irá gerar dados randômicos e enviar ao app para simular um dispositivo real.



### Parada da máquina

Quando ocorre alguma parada na máquina, será enviado um código de erro informando qual situação ocorreu, juntamente com a flag error=true.

```
{  
   id:'f7c02b9065fd0770c6906723213f11df270e9fe9',
   type:'b31ad36d28',
   timestamp:'2019-06-08T18:24:22.889Z',
   errorCode:113,
   error:true
}
```
### Coleta de Sucesso

Para o exemplo abaixo, é retornado o valor 1 para informar que o produto foi verificado com sucesso e sem defeito.

```
{  
   id:'1c77b68fe98614326aa339e183f840f38bd19e50',
   type:'62de4866b7',
   timestamp:'2019-06-08T18:25:25.333Z',
   value:1,
   defect:false
}
```
### Coleta com defeito

Para o exemplo abaixo, é retornado o valor 0 para informar que o produto teve problema e, além disso, que teve defeito.

```
{  
   id:'1c77b68fe98614326aa339e183f840f38bd19e50',
   type:'62de4866b7',
   timestamp:'2019-06-08T18:25:25.333Z',
   value:0,
   defect:true
}
```