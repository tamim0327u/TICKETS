const Discord = require('discord.js');
module.exports = {
    name: "geninv",
    cooldown: 5,
    aliases: ["invite_premium"],
 
run: async (bot, message, args) => { //async
    if(!message.author.id.includes(`693553429380857978`)) return  message.reply('**ONLY MY OWNER CAN USE THIS COMMAND! <:hydroxerror:887650892852125746>**')
	message.channel.send(new Discord.MessageEmbed()
  .setTitle(`Invite command Premium Tickets`)
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
  .setDescription(`**Invite Me [here]()**\n\n**Note: _Only my owner can invite me!_**`)
  .setColor(`#0x2F3136`));
	}
};
