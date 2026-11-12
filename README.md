# Ficha Jeff

PWA da ficha Upper/Lower de Jefferson Almeida. O projeto organiza cinco sessões semanais de força e hipertrofia e transforma a ficha em um diário de treino local, com cargas, repetições, descanso, volume e histórico.

## O que o app oferece

- seleção automática do treino do dia;
- navegação entre os dias com URL própria (`#seg`, `#ter`, `#qua`, `#qui`, `#sex` e `#fds`);
- 43 entradas de exercícios e 42 guias únicos de execução (um exercício é repetido na semana);
- modal com músculos trabalhados, instruções, erros comuns e busca no YouTube;
- início e finalização de sessões com duração em tempo real;
- registro de carga, repetições e conclusão para cada série;
- progresso do treino, volume acumulado e estado de cada exercício;
- timer de descanso automático de acordo com o tipo de sessão;
- histórico dos últimos 60 treinos, salvo somente no dispositivo;
- navegação completa por teclado e suporte a leitores de tela;
- layout responsivo e respeito à preferência de movimento reduzido;
- instalação como PWA e funcionamento offline do app shell.

## Arquitetura

O projeto não usa framework, bundler ou dependências de produção:

- `index.html`: estrutura semântica da interface e programação semanal;
- `styles.css`: identidade visual e layout base;
- `tracker.css`: cockpit, registros, histórico e estados da sessão;
- `app.js`: navegação, sessão de treino, persistência local, timer e modais;
- `exercises.js`: catálogo com músculos, execução e erros comuns;
- `session-core.js`: regras puras de progresso, volume e duração;
- `manifest.json`: metadados de instalação da PWA;
- `sw.js`: cache offline e atualização dos recursos locais;
- `icons/`: ícones usados pelo navegador e pelo sistema operacional;
- `scripts/validate.mjs`: valida a consistência dos dados e dos arquivos da PWA;
- `.github/workflows/deploy-pages.yml`: valida e publica a aplicação no GitHub Pages.

O app continua sem framework, bundler ou dependências em produção. Os dados de treino ficam no navegador por meio de `localStorage`; nada é enviado para servidores externos.

## Executar localmente

Como o service worker exige uma origem HTTP, evite abrir o HTML diretamente pelo Finder:

```bash
python3 -m http.server 4173
```

Depois, acesse [http://localhost:4173](http://localhost:4173).

## Validar antes do deploy

Com Node.js 18 ou superior:

```bash
node scripts/validate.mjs
node scripts/test-session.mjs
```

O validador confere:

- JSON e arquivos de ícone declarados no manifest;
- recursos locais listados no cache offline;
- correspondência entre exercícios e guias de execução;
- IDs únicos e recursos modulares carregados pela PWA;
- total de séries exibido em cada treino.

## Como alterar a ficha

Cada treino fica em uma seção `.day-panel` no `index.html`. Ao adicionar ou renomear um exercício:

1. atualize a linha visual do exercício dentro do dia;
2. adicione ou renomeie a entrada correspondente no objeto `EXERCISES`;
3. atualize o total de séries do cabeçalho;
4. execute `node scripts/validate.mjs`.

## Deploy

Todo push na branch `main` executa a validação e, se ela passar, publica o conteúdo estático no GitHub Pages.
