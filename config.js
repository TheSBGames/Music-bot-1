module.exports = {
  TOKEN: "",
  ownerID: ["1004206704994566164", ""],
  botInvite: "",
  supportServer: "",
  mongodbURL: "mongodb+srv://shiva:shiva@discordbot.opd5w.mongodb.net/?retryWrites=true&w=majority",
  status: '/help',
  commandsDir: './commands',
  language: "en",
  embedColor: "00fbff",
  errorLog: "",


  sponsor: {
    status: true,
    url: "https://www.youtube.com/@TheSBGamesOG",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },

    },

    maxVol: 150,

  }
}
