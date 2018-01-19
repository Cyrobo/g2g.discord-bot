exports.run = async (bot, message, args, globalAdmins) => {
  if (globalAdmins.includes(message.author.id)) {
       try{
        const toSet = message.content.replace('!say ','');
        //message.channel.send(toSay);
		bot.user.setGame(toSet.substr(toSet.indexOf(' ')+1));
      }
      catch(e)
      {
        message.channel.send(`Error Parsing command: ${e}`);
      }	/*if (!args[0]) {
    // Display required args
    message.channel.send(`That command requires a channel id & message to send 
    e.g. !say 227126593754103810 Hello! 
    Would make me say Hello! in the #general channel of the Community Discord`);
  } else {*/
  //bot.user.setGame(message.content);
      //message.channel.send(args);
      //bot.setPresence(args);
      //var botActivity = {}; //idk?
      //var botPresence = {'status': bot.status, 'afk': false, 'activity': botActivity, 'activity.name': 'all of you', 'activity.type': 'WATCHING', 'activity.url': ''}
      //bot.user.setPresence(botPresence);
      //bot.user.setGame(`on 1 server`);
      //message.channel.send(`Not working currently`);
  } else {
    message.channel.send(`Error: Insufficient privileges, How **dare** you attempt to alter my status!`);
	console.log(`set game to ${(toSet.substr(toSet.indexOf(' ')+1))}`)
  }
};

exports.help = {
  name: 'setgame',
  category: 'System',
  description: 'Sets Enfers Game being played',
  usage: 'setgame Game Name',
};
