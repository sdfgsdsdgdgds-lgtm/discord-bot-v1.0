# Discord Moderation Bot
 
This is a Discord bot that provides moderation features including raid protection.
 
## Installation
 
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/discord-moderation-bot.git
   cd discord-moderation-bot
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your Discord bot token:
   ```bash
   DISCORD_TOKEN=YOUR_DISCORD_BOT_TOKEN
   ```
4. To run the bot locally:
   ```bash
   npm start
   ```
 
## Deployment on Render.com
 
1. Create a new Web Service on Render and connect it to your GitHub repository.
2. Set the environment variable in Render dashboard:
   - `DISCORD_TOKEN=YOUR_DISCORD_BOT_TOKEN`
3. Use the following `build` and `start` commands:
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Click on Create Web Service.
 
## Commands
- `!warn @user` - Warn the mentioned user. Double warnings will lead to moderation role assignment.

 
