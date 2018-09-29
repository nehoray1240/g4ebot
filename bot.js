const discord = require("discord.js");
const TOKEN = ("NDk1NjUxNjgwODk3OTkwNjY5.DpFLTw.S2scIFFs9X4kHSnx4TpoBDX6vOA");
var bot = new discord.Client();
bot.on("ready", function () {
    console.log('G4E is online!');
});

bot.on("message", async message => {
    bot.user.setActivity(`${message.guild.memberCount} אנשים בשרת`, { type: "PLAYING" });
    console.log(message.guild.memberCount);
   
});

bot.login(TOKEN);
