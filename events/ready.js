module.exports = (client) => {

var oynuyorkısımları = [
"Bakımdayız",
"Bot Bakımda",
"Bakımda"
]


setInterval(function() {

        var random = Math.floor(Math.random()*(oynuyorkısımları.length-0+1)+0);
       client.user.setActivity(oynuyorkısımları[random], { type: 'PLAYING' });
        }, 2 * 3000);

    console.log("Bot başarı ile giriş yaptı.")
}