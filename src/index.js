const fs = require('fs');
const path = require('path');
const discord = require('discord.js');
const bot = new discord.Client();
const globalAdmins = ['123778278086541313', '288209033247326208', '353530628370726913'];//CyRob, DarkHermor & Ato
const environmentConfigPath = [__dirname, 'config', `${process.env.ENVIRONMENT}.json`].join(path.sep);
const dmChannelId = '398940588063457292';

const reload = require('./commands/reload');

const configPath = `./config/${process.env.ENVIRONMENT}.json`;

bot.config = require('./config/default.json');

if (fs.existsSync(configPath)) {
  Object.assign(bot.config, require(configPath));
}

bot.commands = {};
reload.run(bot);

bot.on('ready', () => {
  console.warn(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
  //bot.user.setGame(`on ${bot.guilds.size} servers`);
  
  bot.user.setGame(`Hacking the Argosy`);//Until I sort out storing data between sessions
  bot.user.setStatus(`dnd`);
});

bot.on('message', async message => {
  console.log(`[${message.createdTimestamp}]: ${message.channel.id}(${message.channel.type}) [${message.author.tag}]: ${message.content}`)
  if (message.author.bot) return;
  try{
    if (message.channel.type === 'dm') {bot.channels.get(dmChannelId).send(`DM from ${message.author.tag}: ${message.content}`);}//print dm's to channel (so they can be seen)
  }
  catch(e)
    {
      console.log(`Error Posting Dm: ${e}`);
    }	
  if (message.content.indexOf(bot.config.prefix) !== 0) return;

  const args = message.content.split(/ +/g);
  const command = args.shift().slice(bot.config.prefix.length).toLowerCase();

  if (!bot.commands[command]) return;

  if (bot.commands[command].help.role) {
    let role = message.guild.roles.find('name', bot.commands[command].help.role);

    if (!role || !message.member.roles.has(role.id)) return;
  }

  bot.commands[command].run(bot, message, args);
});

bot.login(bot.config.token);

process.on('unhandledRejection', error => console.error(`Uncaught Promise Rejection:\n${error}`));//stops bot crashing
