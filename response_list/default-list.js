
/* response examples */
// Basic Response
var helloWorld = require("../responses/hello-world");
// Response with a chain
var responseChain = require("../responses/response-chain");
// Command Not found default
var commandNotFound = require("../responses/command-not-found");

// default responseList
var responseList = [
  // Basic Response Example
  {
    name: "basicResponseExample",
    response: helloWorld,
    commands: [
      /^(.*?(\bhello\b)[^$]*)$/i,
      /^(.*?(\barise\b)[^$]*)$/i
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
        name: 'spaceInvaders',
        response: function(context){
          console.log('Showing Space Invaders!');
        },
        commands: [/^(.*?(\binvaders\b)[^$]*)$/i],
      },
      {
        name: 'Breakout',
        response: function(context){
          console.log('Showing Breakout!');
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
