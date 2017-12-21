const projects = [
  {
    Name: 'Recipe Box',
    Description: 'An application made entirely in React and Redux that allows you to create, edit, and delete all your favourite recipes. Because cataloguing the things you like to eat is just as fun as eating them, right?',
    Reflection: "When I made this I was knee deep in overhauling our JavaScript at work into React and Redux, and wanted more experience in working in this environment, plus, I wanted to validate that the way we were approaching our problems at work was the correct way to go about it. Doing a project like this is great because it really validates my learning and helps me feel like I actually do know what I'm doing, which is always great.",
    TechUsed: [
      'SASS',
      'React',
      'Redux',
    ],
    DateCreated: 'February 2017',
    Link: '/recipes',
    Github: 'https://github.com/Gangezilla/recipe-box',
  },
  {
    Name: 'Markdown Previewer',
    Description: 'A simple tool that converts markdown into HTML right in front of your eyes.',
    Reflection: 'I created this over Christmas as a way to go from knowing nothing about React to knowing something abour React. Looking back at it there are a number of ways that this could be improved, but for what it was at the time, it turned out pretty well as my first foray into React.',
    TechUsed: [
      'CSS',
      'React',
    ],
    DateCreated: 'December 2016',
    Link: '/markdown',
    Github: 'https://github.com/Gangezilla/markdown-preview',
  },
  {
    Name: 'Bar Chart',
    Description: 'This is a chart that allows you to check out American GDP over the years, pretty cool stuff!',
    Reflection: 'A weekend project to try to get my head around doing some D3.js to do some data visualisation. I had done a data visualisation course at uni, and had spent most of my time dabbling in physical electronics to get projects up and running, so I wanted to try my hand at doing some more visual stuff. D3 is a really cool setup and it was really enjoyable getting a bit of time to learn how it all work.',
    TechUsed: [
      'D3.js',
    ],
    DateCreated: 'September 2016',
    Link: '/barchart',
    Github: 'https://github.com/Gangezilla/bar-chart',
  },
  {
    Name: 'File Metadata Microservice',
    Description: "A microservice that lets you upload a (small) file, and it'll tell you some information about that file.",
    Reflection: 'At this point in time I was going through a really big Node.js learning adventure, and this was one of many little projects I put out. I wanted to learn more about how server side technologies worked, and because it seems like JavaScript is en route to eating the world, Node seemed like a good place to start learning.',
    TechUsed: [
      'Node.js',
    ],
    DateCreated: 'July 2016',
    Link: 'https://file-metadata-service-0987.herokuapp.com/',
    Github: 'https://github.com/Gangezilla/file-metadata',
  },
  {
    Name: 'Image Search Microservice',
    Description: 'This is a microservice that uses the Bing Search API to allow a user to search for an image, and then have this returned as JSON right back to them.',
    Reflection: "Looking at it, this seems a bit useless, right? Who would want to search for an image and then get not that image back, but a whole bunch of text?! Ridiculous. This was a really cool project actually, because it allowed me to really start thinking about how information gets from place to place. JSON is a really great way to do this, and it even partially inspired how I'm building this website right now. Since doing this project, I was able to think more critically about our back end at work, and how to shuttle information into the front end. It's all just text, right?",
    TechUsed: [
      'Node.js',
    ],
    DateCreated: 'July 2016',
    Link: 'https://afternoon-stream-91921.herokuapp.com/',
    Github: 'https://github.com/Gangezilla/image-search',
  },
  {
    Name: 'Shrink Link',
    Description: "A similar service to any number of link shortening services, except I wanted to help people remember the URL they received instead of just having to write it down. I did this by combining colours and words to come up with strange/funny URLs that people might remember well. In that way, it isn't a very good URL shortening service, is it...",
    Reflection: 'At the time this project was really HARD. I threw myself right in the deep end with trying to learn MongoDB and Node.js at the same time, and really had no idea what I was doing. But I persevered and got my original vision happening, which was great. I think this was the project that had the most revelations in creating it, it was basically moments of discovery the whole way through which meant I learnt a lot out of it.',
    TechUsed: [
      'Node.js',
      'MongoDB',
    ],
    DateCreated: 'June 2016',
    Link: 'https://shrink-link.herokuapp.com/',
    Github: 'https://github.com/Gangezilla/shrink-link',
  },
  {
    Name: 'Page Header Microservice',
    Description: 'Load this page up and you can easily find information about what is in your HTTP header that your browser is sending out.',
    Reflection: "This was another basic Node microservice to try and get a better handle on the back end technology stack. This was a neat little project because I had always thought about web development as what your browser receives and shows, but hadn't considered how that works, and what information your browser has to send to retrieve what it retrieves.",
    TechUsed: [
      'Node.js',
    ],
    DateCreated: 'June 2016',
    Link: 'https://header-microservice.herokuapp.com/',
    Github: 'https://github.com/Gangezilla/headerRequest',
  },
  {
    Name: 'Timestamp',
    Description: 'A tool that can be used to convert different sorts of timestamps back and forth.',
    Reflection: "This was the first back end project I tried out, meaning I learnt a lot about Node, NPM, Express and all that other good stuff. This also meant I had to learn how to put parameters into the URL which has come in very handy at work since then. All of these microservices are really characterised by a few little 'uh-huh!' moments that have contributed to my greater body of work.",
    TechUsed: [
      'Node.js',
    ],
    DateCreated: 'May 2016',
    Link: 'https://fathomless-lowlands-21843.herokuapp.com/',
    Github: 'https://github.com/Gangezilla/timestamp-microservice',

  },
  {
    Name: 'Wiki Viewer',
    Description: 'A Wikipedia viewer that allows a user to search for something, and see what comes up.',
    Reflection: "This is one of the few pre-APG projects that I have up on here, and was one of the first times I called an API (cute, right?). I think the thing that's most valuable about looking at this is that I've really come a long way since. I remember really sweating it out over late nights and early mornings trying to get projects like this up and running and seeing that I've been able to make a career out of my thirst for knowledge and ability to persevere has been awesome.",
    TechUsed: [
      'HTML',
      'CSS',
      'JavaScript',
      'jQuery',
    ],
    DateCreated: 'February 2016',
    Link: '/wiki',
    Github: 'https://github.com/Gangezilla/wikiViewer',
  },
  {
    Name: 'Twitch.tv Viewer',
    Description: "A project that allows you to see a predefined list of streamers and see if they're streaming at that point in time.",
    Reflection: "Another pre-APG project that makes an API call. At the time I had no idea why this thing wouldn't work. I had done the requisite API calls I needed and could see my data in the console, but could not figure out for the life of me how to make it display. I remember there was this moment where I realised that API calls, unlike everything else I had done up to this point in time, could be asynchronous, and that my second call just might not be getting the information from the first one in time. Quite a good realisation to make.",
    TechUsed: [
      'HTML',
      'CSS',
      'JavaScript',
      'jQuery',
    ],
    DateCreated: 'February 2016',
    Link: '/twitch',
    Github: 'https://github.com/Gangezilla/twitch',
  },
  {
    Name: 'Handsy',
    Description: 'A project designed to get men to wash their hands more.',
    Reflection: "This is the only uni project I have up on here because it's one of my favourites. The project was to figure out a way to get men to wash their hands more often, and I came up with this idea to show people visually what it's like to not wash your hands. An idea I thought was quite funny somehow got me to a finalist position at Vivid Ideas that year and I got to make a speech about it! I didn't end up winning, but it's one of my uni highlights, and I love sharing it with people.",
    TechUsed: [
      'Presentation skills',
    ],
    DateCreated: 'June 2014',
  },
];

module.exports = projects;
