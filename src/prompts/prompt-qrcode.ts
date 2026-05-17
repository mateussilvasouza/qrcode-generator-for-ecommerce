import chalk from "chalk";
import createQRCode from "../services/qrcode/create";

export default async function QRCodePrompt(
  ask: (question: string) => Promise<string>,
) {
  const link = await ask(
    chalk.blue.bold(`Digite o link para gerar o QR Code:\n`),
  );

  if (!link) {
    console.log(chalk.red.bold(`Link inválido. Por favor, tente novamente.`));
    return QRCodePrompt(ask);
  }

  const type = await ask(
    chalk.blue.bold(`Escolha o tipo de QR Code:\n1. Pequeno\n2. Grande\n`),
  );

  const regex = /^[1-2]$/;
  if (!regex.test(type)) {
    console.log(
      chalk.red.bold(`Opção inválida. Por favor, escolha uma opção válida.`),
    );
    return QRCodePrompt(ask);
  }

  const createdQRCode = await createQRCode(link, type);
  return createdQRCode;
}
