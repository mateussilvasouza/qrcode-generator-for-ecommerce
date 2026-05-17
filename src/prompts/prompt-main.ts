import chalk from "chalk";

export default async function prompt(
  ask: (question: string) => Promise<string>,
): Promise<string> {
  console.log(chalk.yellow.bold(`Aqui estão as ferramentas disponíveis:`));
  console.log(chalk.yellow(`1. Gerador de QR Code.\n2. Gerador de Password.`));

  const name = await ask(chalk.blue.bold(`Escolha a ferramenta:\n`));

  if (!/^[1-2]$/.test(name)) {
    console.log(
      chalk.red.bold(`Opção inválida. Por favor, escolha uma opção válida.`),
    );
    return prompt(ask);
  }

  if (name === "1") {
    console.log(chalk.blue(`Gerador de QR Code selecionado!`));
  } else {
    console.log(chalk.blue(`Gerador de Password selecionado!`));
  }

  return name;
}
