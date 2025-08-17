const { Users, Threads } = require('../../database/database');

module.exports = {
  config: {
    name: 'prefix',
    version: '1.0',
    hasPermission: 0,
    credits: 'RAHAT',
    author: 'RAHAT',
    countDown: 5,
    usePrefix: 'false',
    prefix: false, 
    description: 'Displays bot and group prefix, total users, and total threads.',
    category: 'utility',
    commandCategory: 'utility',
    guide: {
      en: '   {pn}'
    },
  },
  run: async ({ api, event }) => {
    try {
      const botPrefix = global.client.config.prefix;
      const threadData = Threads.get(event.threadID);
      const groupPrefix = threadData?.settings?.prefix || 'Not set (using bot default)';

      const totalUsers = Object.keys(Users.getAll()).length;
      const totalThreads = Object.keys(Threads.getAll()).length;

      const message = `--- Bot Information ---\n` +
                      `Bot Prefix: ${botPrefix}\n` +
                      `Group Prefix: ${groupPrefix}\n` +
                      `Total Users: ${totalUsers}\n` +
                      `Total Threads: ${totalThreads}`;

      api.sendMessage(message, event.threadID);

    } catch (error) {
      console.error("Error in prefix command:", error);
      api.sendMessage('An error occurred while fetching prefix information.', event.threadID);
    }
  },
};
