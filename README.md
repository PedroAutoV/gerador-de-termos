# Gerador de Termos — Auto Vale Prevenções

Gerador de termos em um único arquivo HTML. Funciona offline, sem instalação e sem servidor.

## Termos disponíveis

- **Termo de Entrega do Veículo** (terceiro)
- **Termo de Renúncia** (associado)
- **Termo de Responsabilidade**

## Como usar

1. Abra o link do GitHub Pages: **https://pedroautov.github.io/gerador-de-termos/**
2. Escolha a aba do termo desejado.
3. Preencha os dados.
4. Clique em **Gerar Termo (Imprimir/Salvar PDF)**.
5. Na janela de impressão, escolha **Salvar como PDF**.

## Preencher automaticamente por um documento

Na parte superior da página, arraste um arquivo **.docx** do Word (ou clique para escolher). O gerador:

- lê o texto do documento direto no navegador;
- identifica se é Termo de Entrega, Renúncia ou Responsabilidade;
- abre a aba correta e preenche nome, CPF, endereço, veículo, placa, cor, chassi e datas;
- destaca em verde os campos preenchidos para você conferir antes de gerar.

Formatos suportados: apenas `.docx` (Word). PDF e imagem não são lidos.

## Recursos

- Dados do veículo compartilhados entre os termos (marca/modelo, ano, placa e cor).
- Preenchimento salvo automaticamente no navegador (`localStorage`).
- PDF gerado com o nome do termo e do cliente.
- Layout com a logo e o cabeçalho da Auto Vale.

## Privacidade

Os dados digitados ficam apenas no navegador de quem usa o gerador. Nada é enviado para servidores e nenhum dado de cliente fica salvo neste repositório.

## Rodar localmente

Baixe o `index.html` e abra no navegador. Não precisa de internet.
