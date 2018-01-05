exports.run = async (bot, message, args) => {
	
	if (args[0]){
		//const targetUser = (bot.commands[args[0]]);
		try{
			if (!bot.users.exists('tag', (message.content.replace('!userinfo ','')).replace('!request_data ',''))){
				message.channel.send('**Invalid User:** ' + (message.content.replace('!userinfo ','')).replace('!request_data ','') + ' **Example:** ENFER 2.0#6111'); 
				return;
			}else{
				targetUser = bot.users.find('tag', (message.content.replace('!userinfo ','')).replace('!request_data ',''));
			}
		}
		catch(e){
			message.channel.send(`Error: ${e}`); 
			return;}
	} else {
		//message.channel.send(`No Args`);//Debug Line
		targetUser = (message.author);//User is the default targetUser
	}
	//message.channel.send(`targetUser: ${targetUser}`);//Debug Line
	const embed = {// Display info for targetUser
		"description": `
		Discriminator: ${targetUser.discriminator}
		ID: ${targetUser.id}
		DoC: ${targetUser.createdTimestamp}
		Tag: ${targetUser.tag}
		**[Further contents classified]**`,
		"color": 11750,//Blue left trim
		"thumbnail": {
			"url": targetUser.avatarURL
		},
		"author": {//This is the bit at the top of the embed
			"name": `DB File on: ${targetUser.username}`,
			"icon_url": bot.user.avatarURL
		}
	};
		message.channel.send({ embed });
};

exports.help = {
  name: 'userinfo',
  category: 'System',
  description: 'Displays your data',
  usage: 'userinfo [usertag] or request_data [usertag]',
};
