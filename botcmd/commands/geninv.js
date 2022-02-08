const Discord = require('discord.js');
module.exports = {
    name: "geninv",
    cooldown: 5,
    aliases: ["invite_premium"],
 
run: async (bot, message, args) => { //async
    if(!message.author.id.includes(`693553429380857978`)) return  message.reply('**ONLY MY OWNER CAN USE THIS COMMAND! <:hydroxerror:887650892852125746>**')
	message.channel.send(new Discord.MessageEmbed()
  .setTitle(`Invite Vcodez Premium Tickets`)
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
  .setDescription(`**Invite Me [here]()**\n\n**Note: _Only my owner can invite me!_**`)
  .setColor(`#0x2F3136`));
	}
};

/**********************************************************
 * @INFO
 * Bot Coded by R J#4407 | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Work for Milanio Development | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Please Mention Us Milanio Development, When Using This Code!
 * @INFO
 *********************************************************/