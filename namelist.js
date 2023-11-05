const { Client, Intents } = require('discord.js');
const client = new Client({
    intents: [
      Intents.FLAGS.GUILD_MEMBERS, // Required to access member information
    ],
  });
  client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    
    // Replace 'GUILD_ID' with the actual guild ID you want to fetch members from
    const targetGuild = client.guilds.cache.get('1131583916428492882');
    
    if (targetGuild) {
      console.log(`Fetching members from ${targetGuild.name} (ID: ${targetGuild.id})`);
      
      targetGuild.members.fetch().then((members) => {
        members.forEach((member) => {
          console.log(`- ${member.user.tag}`);
        });
      }).catch(console.error);
    } else {
      console.log(`Bot is not in the specified guild.`);
    }
  });
  
  client.login('');