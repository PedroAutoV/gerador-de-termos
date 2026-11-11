const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const html = fs.readFileSync(require('node:path').join(__dirname, '..', 'index.html'), 'utf8');
const match = html.match(/<script>([\s\S]*)<\/script>/);
if (!match) throw new Error('Script tag not found in index.html');

const fakeDocument = {
  querySelectorAll() { return []; },
  querySelector() { return null; },
  getElementById() {
    return {
      innerHTML: '',
      textContent: '',
      className: '',
      classList: { add() {}, remove() {}, contains() { return false; } },
      querySelectorAll() { return []; },
      setAttribute() {},
      addEventListener() {}
    };
  },
  addEventListener() {},
  createElement() {
    return {
      setAttribute() {},
      addEventListener() {},
      querySelectorAll() { return []; },
      style: {},
      getContext() { return { drawImage() {}, imageSmoothingEnabled: true, imageSmoothingQuality: 'high' }; },
      appendChild() {},
      remove() {}
    };
  },
  head: { appendChild() {} }
};

const context = {
  console,
  window: {
    document: fakeDocument,
    localStorage: {
      getItem() { return null; },
      setItem() {}
    },
    addEventListener() {},
    removeEventListener() {},
    setTimeout(fn) { return typeof fn === 'function' ? fn() : null; },
    print() {},
    pdfjsLib: undefined,
    Tesseract: undefined,
    DecompressionStream: undefined,
    Blob,
    FileReader,
    TextDecoder,
    DOMException
  },
  document: fakeDocument,
  localStorage: {
    getItem() { return null; },
    setItem() {}
  },
  console,
  setTimeout(fn) { return typeof fn === 'function' ? fn() : null; },
  clearTimeout() {},
  JSON,
  Math,
  String,
  Array,
  Object,
  RegExp,
  Date,
  Promise,
  Uint8Array,
  DataView,
  TextDecoder,
  Blob,
  FileReader,
  DOMException,
  navigator: { userAgent: 'node' }
};
context.window.window = context.window;
context.window.document = fakeDocument;
context.globalThis = context;

vm.createContext(context);
vm.runInContext(match[1], context);

const dados = context.interpretarTermo([
  'ASSOCIADO: JOÃO DA SILVA, inscrito no CPF sob o nº 123.456.789-09; residente e domiciliado em RUA X; Bairro: CENTRO; nº 10; PETROLINA - PE.',
  'REFERÊNCIAS DO VEÍCULO DO ASSOCIADO:',
  'MARCA/MODELO: FIAT ARGO 1.0; ANO/MODELO: 2024/2025; PLACA: ABC1D23; COR: BRANCA, de propriedade do Associado.',
  'EU, JOÃO DA SILVA, por meio deste, informo que renuncio à prestação do benefício pela Associação Auto Vale Clube de Benefícios.'
]);

assert.equal(dados.dados.endereco, 'RUA X');
assert.equal(dados.dados.bairro, 'CENTRO');
assert.equal(dados.dados.numero, '10');
assert.equal(dados.dados.cor, 'BRANCA');
assert.equal(dados.dados.nome, 'JOÃO DA SILVA');
assert.equal(dados.dados.cpf, '123.456.789-09');
assert.equal(dados.dados.cidade, 'PETROLINA - PE');

const cnhCampo = context.interpretarCnh([
  'REPÚBLICA FEDERATIVA DO BRASIL',
  '2 e 1 NOME E SOBRENOME ANTONIO FRANCISCO DE SOUZA 1ª HABILITAÇÃO 25/02/1983',
  'CPF 628.127.775-91',
  'ASSINADO DIGITALMENTE'
].join('\n'));
assert.equal(cnhCampo.nome, 'ANTONIO FRANCISCO DE SOUZA');

const cnhMrz = context.interpretarCnh('ANTONIO<<FRANCISCO<DE<SOUZA<<<');
assert.equal(cnhMrz.nome, 'ANTONIO FRANCISCO DE SOUZA');
assert.equal(context.valorValidoParaCampo('nome', 'NaN ASSINADO DIGITALMENTE'), false);

console.log('parser regression test passed');
