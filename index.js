const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
 
const MODERATION_ROLE = 'Moderators';
const WARNING_LIMIT = 3;
const userWarnings = {};
 
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('messageCreate', async (message) => {
    try {
        if (message.author.bot) return;
 
        if (message.content.startsWith('!warn')) {
            const userToWarn = message.mentions.users.first();
            if (!userToWarn) {
                message.reply('Please mention a user to warn.');
                return;
            }
            if (!userWarnings[userToWarn.id]) userWarnings[userToWarn.id] = 0;
            userWarnings[userToWarn.id]++;
 
            if (userWarnings[userToWarn.id] >= WARNING_LIMIT) {
                const member = message.guild.members.cache.get(userToWarn.id);
                const role = message.guild.roles.cache.find(role => role.name === MODERATION_ROLE);
                await member.roles.add(role);
                message.channel.send(`User ${userToWarn.tag} has been warned and moderated.`);
                delete userWarnings[userToWarn.id];
            } else {
                message.channel.send(`User ${userToWarn.tag} has been warned. Total warnings: ${userWarnings[userToWarn.id]}`);
            }
        }
    } catch (error) {
        console.error('Error handling message:', error);
    }
});
 
client.login(process.env.DISCORD_TOKEN);
 
