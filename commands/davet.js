const Discord = require('discord.js');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png')
.setDescription(`>>> ${client.user} kullanırken lütfen \`@${client.user.username}\` rolünü en yukarıda tutunuz!

**Botu Davet Etmek İçin:** [Buraya tıkla](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)
\`\`\`Botu Davet Ettiğiniz İçin Teşekkür Ederiz\`\`\`

**Discord Serverımız İçin:** [Buraya tıkla](https://discord.gg/Mc49hvU95M)
\`\`\`Discord Serverımız'a Girdiğiniz İçin Teşekkür Ederiz\`\`\``));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'davet'
};