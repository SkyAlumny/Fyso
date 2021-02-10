// mutevoice command from wumple
const Command = require("../../base/Command.js");
	Discord = require("discord.js");

class Mutevoice extends Command {

	constructor (client) {
		super(client, {
			name: "mutevoice",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [],
			memberPermissions: [ "MUTE_MEMBERS", "MOVE_MEMBERS" ],
			botPermissions: [],
			nsfw: false,
			ownerOnly: true,
			cooldown: 3000
		});
	}

	async run (message, args) {
		let people = message.member.voice.channel.members;

                people.forEach(GuildMember => {
                    GuildMember.voice.setMute(true, "ting");
                });
        const embed = new Discord.MessageEmbed()
				.setColor('#8998f7')
				.setFooter('Wumpus Land | inv.dbwump.ga')
				.setTimestamp()
       				 .setAuthor('Success')
				.setDescription('everyone is muted now | use .unmutevoice to unmuted everyone ');
            
			message.channel.send(embed);

             
            }

}

module.exports = Mutevoice;
