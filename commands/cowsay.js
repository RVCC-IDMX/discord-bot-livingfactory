/* eslint-disable no-undef */
const { SlashCommandBuilder } = require('discord.js');
const cowsay1 = require('cowsay');

const data = new SlashCommandBuilder()
  .setName('cowsay')
  .setDescription('Replies with some cowsay!')
  .addStringOption((option) => option.setName('input')
    .setDescription('The words for the cow to say!')
  // Ensure the text will fit in an embed description, if the user chooses that option
    .setMaxLength(25))
  .addStringOption((option) => option.setName('name')
    .setDescription('The cow to say it!')
    .setMaxLength(25));

module.exports = {
  data,
  async execute(interaction) {
    cowName = JSON.stringify(interaction.options.getString('name'));
    cowName = JSON.parse(cowName);
    let cowsayResponse = cowsay1.say({
      text: interaction.options.getString('input'),
      e: 'xx',
      cow: cowName,
    });

    cowsayResponse = cowsayResponse.replaceAll('`', "'");

    if (!(cowsayResponse > 1994)) {
      await interaction.reply(`\`\`\`${cowsayResponse}\`\`\``);
    } else {
      await interaction.reply('That was too big. Try again!');
    }
  },
};
