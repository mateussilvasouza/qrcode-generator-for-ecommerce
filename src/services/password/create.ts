import permittedCharacters from "./utils/permitted-characters";

export default async function PasswordGenerate(): Promise<string> {
  const characters = await permittedCharacters();

  const envPasswordLength = process.env.PASSWORD_LENGTH;
  if (envPasswordLength === undefined) {
    throw new Error("PASSWORD_LENGTH environment variable is required");
  }

  const passwordLength = parseInt(envPasswordLength, 10);
  if (Number.isNaN(passwordLength) || passwordLength <= 0) {
    throw new Error("PASSWORD_LENGTH must be a positive integer");
  }

  if (characters.length === 0) {
    throw new Error(
      "Nenhum tipo de caractere permitido. Por favor, habilite pelo menos um tipo de caractere nas variáveis de ambiente.",
    );
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}
