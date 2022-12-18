const {
  SlashCommandBuilder, EmbedBuilder,
} = require('discord.js');

const data = new SlashCommandBuilder()
  .setName('weather')
  .setDescription('Return the weather!')
  .addStringOption((option) => option.setName('city')
    .setDescription('The city to check the weather in')
    .setMaxLength(35));

fetch(`api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=4825803d2b436f72fc1be727bc725106`);
const embed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle('Weather Report')
  .setURL('https://github.com/RVCC-IDMX/discord-bot-livingfactory')
  .setDescription('The GitHub repository for the Factory Bot!')
  .addField('Low:')
  .addField('High:')
  .addField('Sunrise:')
  .addField('Sunset:');

module.exports = {
  data,
  async execute(interaction) {
    fetch(`api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=4825803d2b436f72fc1be727bc725106`)
      .then((thisData) => {
        const tempValue = thisData.main.temp;
      });
    await interaction.reply({
      embeds: [embed],
    });
  },
};
