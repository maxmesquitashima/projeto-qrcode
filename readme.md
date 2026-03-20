# Gerador de QRCode e Senhas (CLI)

## 💻 Descrição do Projeto

Este projeto consiste em uma ferramenta de linha de comando (CLI) robusta desenvolvida em **Node.js**. Seu objetivo é agilizar tarefas cotidianas de um e-commerce ou uso pessoal, centralizando duas utilidades principais em uma interface interativa no terminal.

## 🚀 Funcionalidades

1.  **Gerador de QR Code**:
    *   Permite a entrada de qualquer URL ou texto.
    *   Renderiza o QR Code diretamente no terminal do sistema.
    *   Ideal para compartilhar links de produtos ou acessar sites rapidamente via mobile.

2.  **Gerador de Senhas**:
    *   Gera senhas seguras e aleatórias.
    *   Permite personalização total através de variáveis de ambiente.
    *   Opções configuráveis: comprimento da senha, inclusão de números, letras maiúsculas/minúsculas e caracteres especiais.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e conceitos:

*   **Node.js**: Plataforma de execução JavaScript.
*   **Prompt**: Biblioteca para criação de menus interativos e entrada de dados no console.
*   **QRCode-Terminal**: Biblioteca para geração e exibição de códigos QR em terminais ASCII.
*   **Chalk**: Ferramenta para estilização de logs, permitindo mensagens coloridas e feedbacks visuais intuitivos.
*   **ES Modules**: Utilização da sintaxe moderna do JavaScript (`import`/`export`) para modularização do código.
*   **Variáveis de Ambiente Nativas**: Uso da flag `--env-file` do Node.js para gerenciamento seguro de configurações sem dependências externas (como `dotenv`).

## ⚙️ Configuração (.env)

Para personalizar o gerador de senhas, crie um arquivo `.env` na raiz do projeto conforme o modelo abaixo:

```env
PASSWORD_LENGTH=12
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
```

## 📦 Como rodar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o projeto:
   ```bash
   npm run start
   ```
