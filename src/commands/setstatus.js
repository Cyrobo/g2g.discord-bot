exports.run = async (bot, message, args) => {
  if (message.author.id === '123778278086541313' || message.author.id === '288209033247326208' || message.author.id === '353530628370726913' ) {//Can only be used by CyRob, DarkHermor & Ato
  if (!args[0]) {
    // Display required args
    message.channel.send(`That command requires a Status, which must be one of the following: Online, Idle, Invisible & dnd (do not disturb)`);
  }
  args = args[0].toLowerCase();//Status must be lowercase, ignores additional args
  if (args == 'online' || args == 'idle'|| args == 'invisible'|| args == 'dnd'){
    bot.user.setStatus(args);
  } else {
    message.channel.send(`Status must be one of the following: Online, Idle, Invisible & dnd (do not disturb)`);
  }
} else {
  message.channel.send(`Error: Insufficient privileges, How **dare** you attempt to alter my status!`);
}
};

exports.help = {
  name: 'setstatus',
  category: 'System',
  description: 'sets ENFER\'s Status (Online, Idle, Invisible & dnd)',
  usage: 'setstatus status',
};
