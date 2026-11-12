import { existsSync, readFileSync } from 'node:fs';

const fail = message => {
  console.error(`✗ ${message}`);
  process.exitCode = 1;
};

const pass = message => console.log(`✓ ${message}`);
const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const html = read('index.html');
const app = read('app.js');
const exerciseCatalog = read('exercises.js');
const serviceWorker = read('sw.js');

let manifest;
try {
  manifest = JSON.parse(read('manifest.json'));
  pass('manifest.json é um JSON válido');
} catch (error) {
  fail(`manifest.json inválido: ${error.message}`);
}

if (manifest) {
  const missingIcons = manifest.icons
    .map(icon => icon.src)
    .filter(path => !existsSync(new URL(`../${path}`, import.meta.url)));

  if (missingIcons.length) fail(`ícones ausentes: ${missingIcons.join(', ')}`);
  else pass(`${manifest.icons.length} ícones do manifest encontrados`);
}

const shellMatch = serviceWorker.match(/const APP_SHELL = \[([\s\S]*?)\];/);
const shellFiles = shellMatch
  ? [...shellMatch[1].matchAll(/'\.\/(.+?)'/g)].map(match => match[1]).filter(Boolean)
  : [];
const missingShellFiles = shellFiles.filter(path => !existsSync(new URL(`../${path}`, import.meta.url)));

if (!shellMatch) fail('APP_SHELL não encontrado no service worker');
else if (missingShellFiles.length) fail(`recursos offline ausentes: ${missingShellFiles.join(', ')}`);
else pass(`${shellFiles.length} recursos locais do cache offline encontrados`);

const exerciseNames = [...html.matchAll(/<div class="ex-name">([^<]+?)\s*<span/g)]
  .map(match => match[1].trim());
const exerciseKeys = [...exerciseCatalog.matchAll(/^      '([^']+)': \{/gm)]
  .map(match => match[1]);
const uniqueNames = [...new Set(exerciseNames)];
const missingDetails = uniqueNames.filter(name => !exerciseKeys.includes(name));
const unusedDetails = exerciseKeys.filter(name => !uniqueNames.includes(name));

if (missingDetails.length) fail(`exercícios sem detalhes: ${missingDetails.join(', ')}`);
if (unusedDetails.length) fail(`detalhes sem exercício: ${unusedDetails.join(', ')}`);
if (!missingDetails.length && !unusedDetails.length) {
  pass(`${exerciseNames.length} exercícios cobertos por ${exerciseKeys.length} guias únicos`);
}

const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
if (duplicateIds.length) fail(`IDs duplicados no HTML: ${duplicateIds.join(', ')}`);
else pass(`${ids.length} IDs únicos no HTML`);

const referencedIds = [...app.matchAll(/getElementById\('([^']+)'\)/g)].map(match => match[1]);
const missingIds = referencedIds.filter(id => !ids.includes(id));
if (missingIds.length) fail(`IDs usados pelo app não existem no HTML: ${missingIds.join(', ')}`);
else pass(`${referencedIds.length} referências de interface conectadas`);

const moduleImports = [...app.matchAll(/from '\.\/(.+?)'/g)].map(match => match[1]);
const missingModules = moduleImports.filter(path => !existsSync(new URL(`../${path}`, import.meta.url)));
if (missingModules.length) fail(`módulos ausentes: ${missingModules.join(', ')}`);
else pass(`${moduleImports.length} importações modulares resolvidas`);

for (const day of ['seg', 'ter', 'qua', 'qui', 'sex']) {
  const sectionMatch = html.match(
    new RegExp(`<section class="day-panel(?: active)?" id="${day}"[\\s\\S]*?<\\/section>`)
  );

  if (!sectionMatch) {
    fail(`painel do dia não encontrado: ${day}`);
    continue;
  }

  const section = sectionMatch[0];
  const listed = Number(section.match(/data-target="(\d+)"/)?.[1]);
  const actual = [...section.matchAll(/<div class="ex-sets">(\d+) séries<\/div>/g)]
    .reduce((total, match) => total + Number(match[1]), 0);

  if (listed !== actual) fail(`${day}: cabeçalho mostra ${listed} séries, mas os exercícios somam ${actual}`);
  else pass(`${day}: ${actual} séries`);
}

if (!process.exitCode) console.log('\nValidação concluída sem erros.');
