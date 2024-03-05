import { Command } from 'commander';
import getFileInfo from './getFileInfo.js';
import getFileDiff from './getFileDiff.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((pathA, pathB) => {
    const fileA = getFileInfo(pathA);
    const fileB = getFileInfo(pathB);
    if (!fileA || !fileB) {
      console.log('wrong input format');
    } else {
      const formatter = program.opts().format ?? 'stylish';
      const result = getFileDiff(fileA, fileB, formatter);
      console.log(result);
    }
  });

export default program;
