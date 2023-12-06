const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const QR_CODE_API_URL = 'https://chart.googleapis.com/chart?cht=qr';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('qrcode')
    .setDescription('Generates QR Code with anything you want!')
    .addStringOption((option) =>
      option
        .setName('input')
        .setDescription('The input you want to embed in QR Code')
        .setRequired(true),
    )
    .addIntegerOption((option) =>
      option
        .setName('size')
        .setDescription('The size of QR Code, default is 300px'),
    )
    .addStringOption((option) =>
      option
        .setName('color')
        .setDescription(
          "The color of your QR Code in hex (without '#'), default is 000000 (black)",
        ),
    ),
  async execute(interaction) {
    const data = interaction.options.getString('input');
    const size = interaction.options.getInteger('size') ?? 300;
    const color = interaction.options.getString('color') ?? '000000';

    const url = encodeURI(
      `${QR_CODE_API_URL}&chs=${size}x${size}&chl=${data}&chco=${color}`,
    );

    const embedResponse = new EmbedBuilder()
      .setTitle('QR Code Generator')
      .setAuthor({ name: interaction.user.username })
      .setColor(color)
      .setImage(url)
      .setTimestamp();

    await interaction.reply(`Sending QR Code...`);
    await interaction.channel.send({ embeds: [embedResponse] });
  },
};
