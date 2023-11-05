const { Client, Intents } = require('discord.js');

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS, // You can add more intents if needed
  ],
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  
  // Fetch and get the list of guilds (servers) the bot is in
  client.guilds.fetch().then((guilds) => {
    console.log(`Bot is in ${guilds.size} guilds:`);
    
    guilds.forEach((guild) => {
      console.log(`- ${guild.name} (ID: ${guild.id})`);
    });
  });
});

client.login('');