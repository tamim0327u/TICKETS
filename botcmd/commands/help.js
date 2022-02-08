const MessageButton = require('discord-buttons');
const Discord = require('discord.js');
const ee = require("../../botconfig/embed.json");
const client = new Discord.Client();
const disbut = require("discord-buttons");

const { MessageMenuOption, MessageMenu } = require("discord-buttons");
 
 module.exports = {
    name: "help",
    cooldown: 5,
    aliases: ["commands", "auda"],
 
run: async (bot, message, args) => { //async
      //--------------------------------------S T A R T--------------------------------------//
 
      message.react('887650847327158343');


                const embed = new Discord.MessageEmbed()
                .setTitle(`Tickets Premium`)
                .setFooter(ee.footertext, ee.footericon)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`_**Click On the Select Menu Below to __Swap__ help Pages**_\n🏠 - Home Page\n🎟️ - Premium Commands ( tickets )\n❔ - Premium Features\n📔 - About Me`)
                .setColor(`#0x2F3136`)

                const embed2 = new Discord.MessageEmbed()
                .setTitle(`Premium Ticket Commands`)
                .setFooter(ee.footertext, ee.footericon)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**__Here Are My Commands:__**\n\`setup,\` \`transcript,\` \`rename,\` \`remove,\` \`ping,\` \`open,\` \`close\``)
                .setColor(`#0x2F3136`)

                const embed3 = new Discord.MessageEmbed()
                .setTitle(`My Premium Features`)
                .setFooter(ee.footertext, ee.footericon)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**Hello, Im Tickets __PREMIUM__! You May Ask, What is diffent from me than the regular Multi-ticket system**? Well i have, Better emojis, Better buttons, And Lots of More Features!`)
                .setColor(`#0x2F3136`)

                // Last embed
                const embed4 = new Discord.MessageEmbed()
                .setTitle(`About Me`)
                .setFooter(ee.footertext, ee.footericon)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setDescription(`**I was made as a test bot to see if i could actually create a ticket bot with buttons! And since my code was a success, i started actually working on making this a good bot! I first started with the worst looking embeds on this ticket bot and ended with one of the best!**\nThank You for reading\n~ Ticket Bot\n\n**I was Made by, \`R J#4407\`!\n\nJoin my support [server](https://discord.gg/8fYUFxMtAq)**`)
                .setColor(`#0x2F3136`)

                //-----------------------------OPTIONS----------------------
        //examples .setLabel('Put What You Want to put')
        //.setValue('')
        //.setDescription('put what u wantnto put')
 
        let option1 = new MessageMenuOption()
        .setLabel('Home Page')
        .setValue('option1')
        .setEmoji("🏠")
        .setDescription('View All Commands')

        let option2 = new MessageMenuOption()
        .setLabel('Commands')
        .setValue('option2')
        .setEmoji("🎫")
        .setDescription('View Premium Ticket Commands')

        let option3 = new MessageMenuOption()
        .setLabel('Features')
        .setValue('option3')
        .setEmoji("❓")
        .setDescription('View My Premium Features')
  
      let option4 = new MessageMenuOption()
        .setLabel('About Me')
        .setValue('option4')
        .setEmoji("📔")
        .setDescription('View My About')
  

        let select = new MessageMenu()
        .setID('selector')
        .setPlaceholder('Ticket Bot Menu')
        .setMaxValues(1)
        .setMinValues(1)
        .addOptions(option1, option2, option3, option4)

        const Sendmenu = await message.channel.send(embed, select);

        let collector = Sendmenu.createMenuCollector(b => b, { time : 60000 });
 
    collector.on("collect" , (b) => {
      
        if(b.clicker.user.id !== message.author.id)
              return b.reply.send(`❌ **Only <@${message.author.id}> Is Allowed To React!**\n**Tip**: \`To Use This Command, Type the help command\``, true)  

      
        if(b.values[0] == "option1") {
            Sendmenu.edit(embed, select)
        }

        if(b.values[0] == "option2") {
            Sendmenu.edit(embed2, select)
        }

        if(b.values[0] == "option3") {
            Sendmenu.edit(embed3, select)
        }

        if(b.values[0] == "option4") {
            Sendmenu.edit(embed4, select)
        }
 b.reply.defer();
 
 
        
    })
 
    collector.on("end", (b) => {
        Sendmenu.edit(new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription("This help menu is expired! Please retype the \`Help Command\`")
        .setFooter("ee.footertext, ee.footericon"))
    })

    }
}

/**********************************************************
 * @INFO
 * Bot Coded by R J#4407 | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Work for Milanio Development | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Please Mention Us Milanio Development, When Using This Code!
 * @INFO
 *********************************************************/