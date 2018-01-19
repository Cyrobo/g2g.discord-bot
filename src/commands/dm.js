exports.run = async (bot, message, args, globalAdmins) => {
  if (globalAdmins.includes(message.author.id)) {
	if (!args[0]) {
      // Display required args
      message.channel.send(`That command requires a user tag & message to send 
      e.g. !dm Cyrob#7865 Hello! 
      Would make me dm Hello! to CyRob#7865`);
    } else {
		
	  try{
			if (!bot.users.exists('tag', args[0])){
				message.channel.send('**Invalid User:** ' + args[0] + ' **Example:** Cyrob#7865'); 
				return;
			}else{
				try{
				  const toSay = message.content.replace('!dm ','').replace(args[0],'');//bot.users.find('tag', (message.content.replace('!dm ','')))
				  //targetUser = "<@123778278086541313>";
				  bot.users.find('tag', (args[0])).send(toSay); //toSay.substr(toSay.indexOf(' ')+1)
				}
				catch(e)
				{
				  message.channel.send(`Error Parsing command: ${e}`);
				}	
			}
		}
		catch(e){
			message.channel.send(`Error: ${e}`); 
			return;}	
    }
  } else {
    message.channel.send(`Error: Insufficient privileges, How **dare** you try command me to speak on your behalf!`);
  }
};

exports.help = {
  name: 'dm',
  category: 'System',
  description: 'Has ENFER dm your message to the given user',
  usage: 'dm UserTag Message',
};
