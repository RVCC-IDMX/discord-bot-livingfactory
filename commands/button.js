const {
  SlashCommandBuilder, ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle,
} = require('discord.js');

const data = new SlashCommandBuilder()
  .setName('button')
  .setDescription('Return a button!');

const embed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle('Factory Bot Repo')
  .setURL('https://github.com/RVCC-IDMX/discord-bot-livingfactory')
  .setDescription('The GitHub repository for the Factory Bot!');

module.exports = {
  data,
  async execute(interaction) {
    const button = new ButtonBuilder()
      .setLabel('Click here!')
      .setURL('https://github.com/RVCC-IDMX/discord-bot-livingfactory')
      .setStyle(ButtonStyle.Link);

    await interaction.reply({
      content: 'A link to my repo!',
      embeds: [embed],
      components: [new ActionRowBuilder().addComponents(button)],
    });
  },
};
