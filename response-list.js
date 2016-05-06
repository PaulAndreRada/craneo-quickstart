
// responses
var helloWorld = require("./responses/hello-world");
var responseChain = require("./responses/response-chain");
var commandNotFound = require("./responses/command-not-found");

// default responseList
var responseList = [
  // Basic Response Example
  {
    name: "basicResponseExample",
    response: helloWorld,
    commands: [
      /^(.*?(\bhello\b)[^$]*)$/i,
      /^(.*?(\bhey\b)[^$]*)$/i
    ]
  },

  // Response Chain Example
  {
    name: "responseChainExample",
    response: responseChain,
    commands: [
      /^(.*?(\bchain\b)[^$]*)$/i
    ]
  },

  // Read Chain example
  {
    name: 'readChainExample',
    response: 'read',
    commands: [/^(.*?(\bshow\b)[^$]*)$/i],
    responseList:
    [
      {
        name: 'showSpaceInvaders',
        response: function(context){
          console.log('Space Invaders!');
        },
        commands: [/^(.*?(\binvaders\b)[^$]*)$/i],
      },
      {
        name: 'showBreakout',
        response: function(context){
          console.log('Breakout!');
          return false;
        },
        commands: [/^(.*?(\bbreakout\b)[^$]*)$/i],
      },
      {
        name:'commandNotFound',
        response: commandNotFound,
        commands: []
      }
    ]
  },
  {
    name:'commandNotFound',
    response: commandNotFound,
    commands: []
  }
]

module.exports = responseList;
