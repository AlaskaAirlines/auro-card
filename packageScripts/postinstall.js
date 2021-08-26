'use strict';

const chalk = require('chalk');
const pjson = require('../package.json');

console.log(chalk.hex('#f26135')(`

 _______                   __           __ __
|     __|.---.-.--.--.    |  |--.-----.|  |  |.-----.
|__     ||  _  |  |  |    |     |  -__||  |  ||  _  |
|_______||___._|___  |    |__|__|_____||__|__||_____|
               |_____|
 __              _______                    __
|  |_.-----.    |   _   |.--.--.----.-----.|  |
|   _|  _  |    |       ||  |  |   _|  _  ||__|
|____|_____|    |___|___||_____|__| |_____||__|


╭ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ──────────────────────────────╮

        Thanks for installing the latest version
                of `) + chalk.hex('#ffd200').bold(`auro-card v${pjson.version}.`) + chalk.hex('#ffd200')(`

        =>  DEPRECATION ALERT! DEPRECATION ALERT! <=`) + chalk.hex('#f26135')(`

        With this release, the `) + chalk.hex('#ffd200').bold(`@alaskaairui`) + chalk.hex('#f26135')(` namespace
        of auro-card is `) + chalk.hex('#ffd200').bold(`deprecated`) + chalk.hex('#f26135')(`. Be sure to
        update to `) + chalk.hex('#ffd200').bold(`@aurodesignsystem/auro-card`) + chalk.hex('#f26135')(`
        for the next major release.`) + chalk.hex('#ffd200').bold(`

        =>  DEPRECATION ALERT! DEPRECATION ALERT! <=`) + chalk.hex('#f26135')(`

        The next major release of auro-card will not
        include auro-banner. Auro-banner will be a
        stand-alone component with the upcoming
        release of `) + chalk.hex('#ffd200').bold(`@aurolabs/auro-banner v2.0`)
        + chalk.hex('#f26135')(`.

╰─────────────────────────────── ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─╯
`)
);
