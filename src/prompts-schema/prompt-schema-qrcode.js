import chalk from "chalk";


const promptQRCODE = [
    {
        name: "link",
        description: chalk.yellow ("Digite o link para gerar o QRCODE"),

    },
    {
        name: "type",
        description: chalk.yellow(
            "Escolha entre o tipo(1-NORMAL ou(2- TERMINAL))"
        ),
        pattern: /^[1-2]+$/,
        message: chalk.redBright.italic("Escolha apenas entre 1 e 2"),
        require: true,

    }

];

export default promptQRCODE;