const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://media.giphy.com/media/mBkM18U5OMSkTcDmeu/giphy.gif', 'https://media.giphy.com/media/RGRzukK0YNlQbZEUVP/giphy.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`\`\`\`i | E Bot Diğer Kullanabileceğin Komutlar Aşağıda Yer Almakta.\`\`\`

🐦 \`${client.ayarlar.prefix}av\`
**Kullanıcının profilinde ki fotoğrafı gösterir**

📖 \`${client.ayarlar.prefix}duyuru\`
**Yazı içeriğini oluşturabilirsin**

🐱 \`${client.ayarlar.prefix}afk\`
**Cihaz başında olmadığınız süre için kullanırsın**

☁️ \`${client.ayarlar.prefix}davet\`
**i | E Bot bağlantılarını gönderir**

📋 \`${client.ayarlar.prefix}kurallar\`
**i | E Bot hazır tema ile kurallarınızı yerleştirir**

🌟 \`${client.ayarlar.prefix}yavaş-mod\`
**i | E Bot üyelerinizin belirlediğiniz sürede bir mesaj yazmasını sağlar**

\`${client.ayarlar.prefix}emote\`
**Emoji URL veya Emoji girerek eğlenceli emojinin çizilimini atar**

🐝 \`${client.ayarlar.prefix}emoji\`
**i | E Bot sunucunda ki emoji ismini yaz sana indirme bağlantısı verir**

🔞 \`${client.ayarlar.prefix}nsfw\`
**Cinsel içerikler içeride seni bekliyor**

🎲 \`${client.ayarlar.prefix}oyunlar\`
**Eğlenceye kendini kaptırma**

🔐 \`${client.ayarlar.prefix}kanal-kilit\` **&** \`${client.ayarlar.prefix}kilit-aç\`
**Kanalı kilitlemenize yarar**

❕ \`${client.ayarlar.prefix}çek [@etiket]\` **|** \`${client.ayarlar.prefix}kes [@etiket]\` **|** \`${client.ayarlar.prefix}git [@etiket]\`
**Belirli sesli kanalda ki kullanıcıyı yanına çekmeni sağlar ve kişiyi sesten atmanı sağlar. Seste yanına gitmeni sağlar**

💐 \`${client.ayarlar.prefix}rol-renk\`
**i | E Bot Telefon kullananlar için Rol Renk değiştirme**

🗑 \`${client.ayarlar.prefix}sil [100]\`
**i | E Bot bot kanaldaki mesajları siler**

<:exit:829263408439623680> \`${client.ayarlar.prefix}sunucudan-ayrıl\`
**i | E Bot ile kurmuş olduğunuz ayarlarınızı sıfırlayarak sunucundan çıkar**`).setThumbnail('https://media.giphy.com/media/3qXi5eIvcgCmTDObOU/giphy.gif'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['other'],
  permLevel: 0
}

exports.help = {
  name: 'diğer'
};