// * 神だ

import { Client } from "discord.js";
import chalk from "chalk";
import * as fs from "fs/promises";

const client = new Client();

client.on("ready", () => {
    console.log(chalk.green(`God Bot mounted as ${client.user?.tag}`));
    setInterval(() => {
        try {
            client.user?.setActivity({
                name: "With Other Gods",
                type: "PLAYING",
            });
        }
        catch (err) {
            console.log(chalk.red(`Error Setting Status: ${err}`));
        }
    },
        1000 * 60 * 5);
});

(async () => {
    try {
        const buffer = await fs.readFile("auth.json");
        const auth = JSON.parse(buffer.toString());
        client.login(auth.token);
    }
    catch (err) {
        console.log(chalk.red(`God Bot cannot be mounted: ${err}`));
        process.exit(1);
    }
})();
