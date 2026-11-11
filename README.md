# Gerador de Termos — Auto Vale Prevenções

Gerador de termos em um único arquivo HTML. Funciona no navegador, sem instalação e sem servidor.

## Termos disponíveis

- **Termo de Entrega do Veículo** (terceiro)
- **Termo de Renúncia** (associado)
- **Termo de Responsabilidade**

## Regras de preenchimento

- **Comprovante de residência**: preenche dados de endereço.
- **CRLV**: preenche dados do veículo.
- **CNH**: preenche dados da pessoa.
- **Termo Word**: removido da interface; o gerador agora considera apenas os três documentos de origem acima.

## Como usar

1. Abra o link do GitHub Pages: **https://pedroautov.github.io/gerador-de-termos/**
2. Escolha a aba do termo desejado.
3. Preencha os dados.
4. Clique em **Gerar Termo (Imprimir/Salvar PDF)**.
5. Na janela de impressão, escolha **Salvar como PDF**.

## Preencher automaticamente por documentos

Na parte superior da página, anexe cada documento na categoria correspondente (ou arraste os arquivos para a área correta). O gerador:

- lê tudo direto no navegador;
- usa o **comprovante de residência** para endereço, bairro, número e cidade;
- usa o **CRLV** para os dados do veículo;
- usa a **CNH** para nome e CPF;
- destaca em verde os campos preenchidos para você conferir antes de gerar.

### Formatos aceitos

| Categoria | Arquivo | O que é lido |
|---|---|---|
| Comprovante de residência | PDF ou imagem | endereço, bairro, número e cidade, quando identificados |
| CRLV | PDF ou imagem | placa, chassi, marca/modelo, ano e cor |
| CNH | PDF ou imagem | nome e CPF |

### Exemplo de uso

1. Anexe a **CNH** na categoria CNH e o **CRLV** na categoria CRLV.
2. Anexe o **comprovante de residência** na categoria correspondente para preencher os dados de endereço.
3. Confira os campos preenchidos, complete o que faltar e gere o termo.

Observações:

- O OCR (leitura de imagem/PDF escaneado) é feito no próprio navegador e pode levar de 10 a 40 segundos na primeira vez, pois baixa o leitor do CDN.
- Os dados extraídos ficam limitados aos campos da categoria selecionada. Confira os resultados e complete manualmente o que não for identificado.
- Se um dado não for encontrado, o campo fica vazio.

## Recursos

- Dados do veículo compartilhados entre os termos (marca/modelo, ano, placa e cor).
- Preenchimento salvo automaticamente no navegador (`localStorage`).
- PDF gerado com o nome do termo e do cliente.
- Layout com a logo e o cabeçalho da Auto Vale.

## Privacidade

Os dados e os arquivos enviados ficam apenas no navegador de quem usa o gerador. Nada é enviado para servidores e nenhum dado de cliente fica salvo neste repositório.

A única conexão externa é o download das bibliotecas de leitura de PDF e OCR (pdf.js e Tesseract.js), hospedadas em CDN. Isso só acontece quando alguém envia um PDF ou uma foto.

## Rodar localmente

Baixe o `index.html` e abra no navegador. Para `.docx` não precisa de internet; para PDF e foto é preciso conexão na primeira leitura.

