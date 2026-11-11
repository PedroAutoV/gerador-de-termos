# Gerador de Termos — Auto Vale Prevenções

Gerador de termos em um único arquivo HTML. Funciona no navegador, sem instalação e sem servidor.

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

## Preencher automaticamente por documentos

Na parte superior da página, arraste um ou **vários arquivos** (ou clique para escolher). O gerador:

- lê tudo direto no navegador;
- junta os dados de todos os arquivos enviados (ex.: **CNH + CRLV** do mesmo cliente);
- identifica o tipo do documento e preenche os campos correspondentes;
- destaca em verde os campos preenchidos para você conferir antes de gerar.

### Formatos aceitos

| Arquivo | O que é lido |
|---|---|
| `.docx` (Word) | Termo de Entrega, Renúncia ou Responsabilidade já preenchido |
| `.pdf` com texto (ex.: CRLV Digital) | placa, Renavam, chassi, marca/modelo, ano, cor, proprietário, CPF e cidade |
| `.pdf` com imagem (ex.: CNH Digital) | OCR da carteira: nome, CPF e data de nascimento |
| `.jpg`, `.png`, `.webp` | OCR de foto de documento (CNH, CRLV) |

### Exemplo de uso

1. Arraste a **CNH** e o **CRLV** juntos, de uma só vez.
2. O gerador lê a CNH (foto → OCR) e o CRLV (texto), junta os dados e preenche nome, CPF, cidade, veículo, ano, placa, cor e chassi.
3. Complete o que faltar (endereço, bairro, número) e gere o termo.

Observações:

- O OCR (leitura de imagem/PDF escaneado) é feito no próprio navegador e pode levar de 10 a 40 segundos na primeira vez, pois baixa o leitor do CDN.
- Endereço, bairro e número não constam na CNH nem no CRLV — preencha manualmente.
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

