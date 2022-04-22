import chalk from 'chalk';
import pegaArquivo from './index.js';
import validaUrls from './http-validacao.js';
const caminho = process.argv;

async function processaTexta(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminho[2]);
    if (caminho[3] === 'validar') {
        console.log(chalk.yellow('links validados'), await validaUrls(resultado));
    } else {
        console.log(chalk.yellow('lista de links'), resultado);
    }
}

processaTexta(caminho);