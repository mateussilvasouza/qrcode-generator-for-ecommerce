import * as dotenv from "dotenv";
dotenv.config();
import readline from "node:readline";
import chalk from "chalk";
import prompt from "./prompts/prompt-main";
import QRCodePrompt from "./prompts/prompt-qrcode";
import PasswordGenerate from "./services/password/create";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function main() {
  console.log(
    chalk.blue.bold(`Bem-vindo ao kit de ferramentas para ecommerce!`),
  );
  try {
    const tool = await prompt(ask);
    if (tool === "1") {
      const qrCode = await QRCodePrompt(ask);
      console.log(chalk.green.bold(`QR Code gerado com sucesso!`));
      console.log(qrCode);
    }
    if (tool === "2") {
      const password = await PasswordGenerate();
      console.log(chalk.green.bold(`Senha gerada com sucesso!`));
      console.log(password);
    }

    rl.close();
  } catch (error: any) {
    console.error(chalk.red.bold(`Ocorreu um erro: ${error.message}`));
  }
}

main();
