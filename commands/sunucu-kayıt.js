const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`${client.user} **Kayıt Sistem
__Tek komut ile kayıt ve isim yapabilirsin.__**

> \`${client.ayarlar.prefix}erkek-role [@rolEtiket]\`
> \`${client.ayarlar.prefix}kadın-role [@rolEtiket]\`
> \`${client.ayarlar.prefix}yetkili-role [@rolEtiket]\`
> \`${client.ayarlar.prefix}kayıtsız-role [@rolEtiket]\`

\`\`\`        [ Kapatma Komutları ]        \`\`\`
> 🗑️ **${client.ayarlar.prefix}erkek-sil**
> 🗑️ **${client.ayarlar.prefix}kadın-sil**
> 🗑️ **${client.ayarlar.prefix}yetkili-sil**
> 🗑️ **${client.ayarlar.prefix}kayıtsız-sil**

\`\`\`İsim başına tag koyması için
!kayıt-tag 🚀
!kayıt-tag-kapat\`\`\``).setImage('https://media.giphy.com/media/O4NExCInTcQp0OxAHT/giphy.gif')

.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.giphy.com/media/O4NExCInTcQp0OxAHT/giphy.gif'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kayıt'],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kayıt'
};