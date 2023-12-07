<h1 align="center">
  <br>
   QR Code Generator
  <br>
</h1>
<h4 align="center">A simple QR Code generator discord bot made with Node.js module <a href="https://discord.js.org/" target="_blank">discord.js</a> and <a href="https://developers.google.com/chart/infographics/docs/qr_codes" target="_blank">Google API</a></h4>  

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

<p align="center">
  <img src="https://github.com/evans-costa/discord-bot/blob/main/src/images/discord-qrgen.gif?raw=true">
</p>

## Key Features

* Put anything you want as a input (a link to your GitHub account, LinkedIn profile, your portfolio site...)
* Set a QR Code size, default is 300px
* Set a color of your QR Code (in hex), default is black
* Voilá! You QR Code is ready to be scanned by someone in the Discord channel!

## How To Use

> **Note**
> This bot is not hosted, so, if you want to use it, you have to setting up some things on your own.

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/evans-costa/discord-bot.git

# Go into the repository
$ cd discord-bot
```

```dotenv
# Rename the `.env.example` to `.env` file with details from Discord bot and server set up
DISCORD_CLIENT_ID = XXXXXXXXXXXXXXXXXXXX
DISCORD_TOKEN = XXXXXXXXXX.XXXXXXX.XXXXXXXXXXXXXXXXXXXX
DISCORD_GUILD_ID =  XXXXXXXXXXXXXXXXXX
```
> **Note**
> To create a discord bot and set up to your discord server, [follow this guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).

```bash
# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Credits

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [Discord.js](https://discord.js.org)

## License

The MIT License (MIT) 2023 - Evandro Costa. Please have a look at the LICENSE for more details.

---
> GitHub [@evans-costa](https://github.com/evans-costa) &nbsp;&middot;&nbsp;
> LinkedIn [@evandro-souzac](https://www.linkedin.com/in/evandro-souzac/)
