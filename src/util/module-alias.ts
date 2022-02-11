import * as path from 'path';
import moduleAlias from 'module-alias';

const arquivos = path.resolve(__dirname, '../..');

moduleAlias.addAliases({
  '@src': path.join(arquivos, 'src'),
  '@testes': path.join(arquivos, 'testes'),
});
