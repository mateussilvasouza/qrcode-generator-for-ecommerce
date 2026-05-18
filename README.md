# ✨ QRCode Generator — Ferramentas para e‑commerce

> Projeto desenvolvido como atividade do Bootcamp **Jornada para o Futuro** — Digital Innovation One (DIO).

Pequeno utilitário CLI para gerar QR Codes (ASCII) e senhas. O projeto foi escrito originalmente em JavaScript puro; para estudo e evolução optei por migrar para **TypeScript** e adicionar um fluxo de build com **Webpack**. Para a interação com o usuário mantive a API nativa do Node (`readline`) por simplicidade e controle.

---

## 🔎 Visão rápida

- Geração de QR Code exibido em ASCII no terminal (usa `qrcode-terminal`).
- Gerador de senhas configurável por `.env` (`PASSWORD_LENGTH`).
- Prompts via `readline` (sem bibliotecas externas de prompt).
- Código em TypeScript + bundle via Webpack (saída: `dist/index.cjs`).

---

## ✅ Motivações das escolhas

- **TypeScript** — melhor segurança e autocompletar durante o desenvolvimento.
- **Webpack** — facilita gerar um bundle pronto para execução (CommonJS `.cjs`).
- **readline** — reduz dependências e mantém o comportamento previsível em terminal.

> Observação técnica: por causa de caracteres de escape presentes em `qrcode-terminal`, esse pacote é tratado como `external` no bundle para evitar problemas ao gerar o arquivo final.

---

## 🧰 Requisitos

- Node.js v16+ (testado em Node 22)
- npm

---

## ⚙️ Instalação

```bash
npm install
```

Crie um `.env` com a configuração necessária (exemplo):

```env
PASSWORD_LENGTH=12
```

`PASSWORD_LENGTH` deve ser um inteiro positivo (é obrigatório para o gerador de senhas).

---

## ▶️ Scripts úteis

- `npm run typecheck` — valida o TypeScript (`tsc --noEmit`).
- `npm run build` — valida tipos e gera o bundle com Webpack.
- `npm start` — build + execução do bundle (`node dist/index.cjs`).

---

## 🧭 Uso (exemplo de sessão)

1. Rode:

```bash
npm start
```

2. Exemplo de interação:

```
Bem-vindo ao kit de ferramentas para ecommerce!
Aqui estão as ferramentas disponíveis:
1. Gerador de QR Code.
2. Gerador de Password.
Escolha a ferramenta:
> 1
Gerador de QR Code selecionado!
Digite o link para gerar o QR Code:
> https://exemplo.com
Escolha o tipo de QR Code:
1. Pequeno
2. Grande
> 1
<QR ASCII exibido aqui>
```

---

## 📁 Estrutura do projeto

- `src/` — código-fonte em TypeScript
  - `prompts/` — interação com usuário
  - `services/` — geração de QR e senhas
- `dist/` — bundle produzido pelo Webpack

---

## 🤝 Contribuição

- Abra uma issue para discutir melhorias.
- Faça fork, branch e envie um PR com descrição clara.

---

## 📝 Observações finais

Projeto educacional criado para revisão de conceitos.
---

Licença: uso educacional.
