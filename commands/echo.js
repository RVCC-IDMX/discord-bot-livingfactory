/* eslint-disable no-undef */
const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
  .setName('echo')
  .setDescription('Replies with your input!')
  .addStringOption((option) => option.setName('input')
    .setDescription('The input to echo back')
    // Ensure the text will fit in an embed description, if the user chooses that option
    .setMaxLength(25));

module.exports = {
  data,
  async execute(interaction) {
    await interaction.reply(interaction.options.getString('input'));
  },
};
