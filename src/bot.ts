// * 神だ

import { Client } from "discord.js";
import * as chalk from "chalk";
import * as fs from "fs/promises";

const client = new Client();

client.on("ready", () => {
    console.log(chalk.green(`God Bot mounted as ${client.user?.tag}`));
    client.user?.setActivity({ 
        name: "With other Gods",
        type: "PLAYING"
    });
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
}
)();
