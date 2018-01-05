exports.run = async (bot, message, args) => {
  if (message.author.id === '123778278086541313' || message.author.id === '288209033247326208' || message.author.id === '353530628370726913' ) {//Can only be used by CyRob, DarkHermor & Ato
    if (!args[0]) {
      // Display required args
      message.channel.send(`That command requires a channel id & message to send 
      e.g. !say 227126593754103810 Hello! 
      Would make me say Hello! in the #general channel of the Community Discord`);
    } else {
      try{
        const toSay = message.content.replace('!say ','');
        //message.channel.send(toSay);
        bot.channels.get(toSay.substr(0,toSay.indexOf(' '))).send(toSay.substr(toSay.indexOf(' ')+1));
      }
      catch(e)
      {
        message.channel.send(`Error Parsing command: ${e}`);
      }		
    }
  } else {
    message.channel.send(`Error: Insufficient privileges, How **dare** you try command me to speak on your behalf!`);
  }
};

exports.help = {
  name: 'say',
  category: 'System',
  description: 'Has ENFER say your message in the given channel',
  usage: 'say channel.id Message',
};
