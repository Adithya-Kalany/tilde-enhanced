const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
      name: 'Whoogle',
      key: '*',
      url: 'https://whoogle-search.adithyakalany.repl.co',
      search: '/search?q='
    },
    {
      category: 'Important',
      name: 'ProtonMail',
      key: 'pm',
      url: 'https://mail.protonmail.com/u/0/inbox',
      search: '/#search/text={}',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'mail',
      quickLaunch: true,
    },
    {
      category: 'Important',
      name: 'Accounts',
      key: 'ga',
      url: 'https://myaccount.google.com/device-activity',
      search: '/drive/search?q={}',
      color: 'linear-gradient(135deg, #FFD04B, #1EA362, #4688F3)',
      icon: 'drive',
      quickLaunch: true,
    },
    {
      category: 'Important',
      name: 'Codeyoung',
      key: 'st',
      url: 'https://studentportal.codeyoung.com/',
      color: '#5682a3',
      icon: 'telegram',
      quickLaunch: false,
    },
    {
      category: 'Important',
      name: 'WhatsApp',
      key: 'wh',
      url: 'https://web.whatsapp.com',
      color: 'linear-gradient(135deg, #25D366, #128C7E, #075E54)',
      icon: 'whatsapp',
      quickLaunch: false,
    },
    {
      category: 'Important',
      name: 'Github',
      key: 'gi',
      url: 'https://github.com',
      color: '#7289da',
      icon: 'discord',
      quickLaunch: false,
    },


    { 
      category: 'Reddit',
      name: 'r/privacy',
      key: 'pri',
      url: 'https://libreddit.spike.codes/r/privacy',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
      icon: 'github',
      quickLaunch: false,
    },
    {
      category: 'Reddit',
      name: 'r/linux',
      key: 'lin',
      url: 'https://libreddit.spike.codes/r/linux',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #53341C, #F48024)',
      icon: 'stackoverflow',
      quickLaunch: false,
    },
    {
      category: 'Reddit',
      name: 'r/firefoxcss',
      key: 'css',
      url: 'https://libreddit.spike.codes/r/firefoxcss',
      search: '/search?stories[query]={}',
      color: 'linear-gradient(135deg, #FF6600, #DC5901)',
      icon: 'hackernews',
      quickLaunch: false,
    },
    {
      category: 'Reddit',
      name: 'r/ToR',
      key: 'tor',
      url: 'https://reddit.com/r/TranscribersOfReddit/',
      search: '/search?q={}',
      color: '#212121',
      icon: 'mdn',
      quickLaunch: false,
    },
    {
      category: 'Reddit',
      name: 'r/linuxmemes',
      key: 'me',
      url: 'https://libreddit.spike.codes/r/linuxmemes',
      color: 'linear-gradient(135deg, #33373A, #484949)',
      icon: 'devdocs',
      quickLaunch: false,
    },


    {
      category: 'Music',
      name: 'CodeRadio',
      key: 'fre',
      url: 'https://coderadio.freecodecamp.org/',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      icon: 'youtube',
      quickLaunch: false,
    },
    {
      category: 'Music',
      name: 'MTZRadio',
      key: 'mtz',
      url: 'https://radio.mashtoolz.xyz/',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'reddit',
      quickLaunch: false,
    },
    {
      category: 'Music',
      name: 'LofiRaz',
      key: 'lof',
      url: 'https://yewtu.be/watch?v=19BbOdi2sT4',
      color: 'linear-gradient(135deg, #E50914, #CB020C)',
      icon: 'netflix',
      quickLaunch: false,
    },
    {
      category: 'Music',
      name: 'LofiGirl',
      key: 'gir',
      url: 'https://yewtu.be/watch?v=5qap5aO4i9A',
      search: '/search/{}',
      color: '#1dd35e',
      icon: 'spotify',
      quickLaunch: false,
    },
    {
      category: 'Music',
      name: 'WantedMore',
      key: 'wm',
      url: 'https://yewtu.be/watch?v=s5UdHVx_Nd0',
      search: '/directory/game/{}',
      color: 'linear-gradient(135deg, #6441a5, #4b367c)',
      icon: 'twitch',
      quickLaunch: false,
    },


    {
      category: 'Self Hosted',
      name: 'PiHole',
      key: 'pi',
      url: 'http://192.168.1.12/admin',
      search: '/search?q={}&src=typed_query',
      color: 'linear-gradient(135deg, #1DA1F2, #19608F)',
      icon: 'twitter',
      quickLaunch: false,
    },
    {
      category: 'Self Hosted',
      name: 'Bitwarden',
      key: 'bit',
      url: 'https://192.168.1.12:8080/',
      color: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
      icon: 'instagram',
      quickLaunch: false,
    },
    {
      category: 'Self Hosted',
      name: 'Libreddit',
      key: 'lib',
      url: 'http://192.168.1.12:85/',
      search: '/search/results/all/?keywords={}',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'linkedin',
      quickLaunch: false,
    },
    {
      category: 'Self Hosted',
      name: 'Whoogle',
      key: 'who',
      url: 'http://192.168.1.12:5000/',
      color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
      icon: 'notion',
      quickLaunch: false,
    },
    {
      category: 'Self Hosted',
      name: 'Portainer',
      key: 'tr',
      url: 'https://192.168.1.12:9443/',
      search: '/#view=home&op=translate&sl=auto&tl=en&text={}',
      color: '#1a73e8',
      icon: 'translate',
      quickLaunch: false,
    },
  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: false,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },
    {
      name: 'DuckDuckGo',
      limit: 4
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/unixporn', 'r/r/startpages', 'r/r/webdev', 'r/r/technology'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any Self Hosted
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: false,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ':',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: false,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};
