import { Command } from 'commander';
import getFileInfo from './getFileInfo.js';

const genDiffFunc = () => {
  const program = new Command();
  
  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1', '-V, --version', 'output the version number')
    .helpOption('-h, --help', 'output usage information')
    .option('-f, --format [type]', 'output format')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .action((pathA, pathB) => {
      const fileA = getFileInfo(pathA);
      const fileB = getFileInfo(pathB);
      if (!fileA || !fileB) {
        console.log('wrong input format');
      } else {
        console.log(fileA, fileB);
      }
    });

  program.parse();
};

export default genDiffFunc;