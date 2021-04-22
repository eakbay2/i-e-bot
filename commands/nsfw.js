const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setTitle(`🔞 Bu Komutları Kullanamaz`).setDescription(`**Kullanaması Durumda Sorumlu Değiliz.

!anal
!4k
!ass
!pgif
!hentai
!pussy
!thigh**`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'nsfw'
};