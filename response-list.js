
// responses
var testEnd = require("./responses/test-end");
var testChain = require("./responses/test-chain");
var showBanana = function(context){
    console.log('showBanana');
    return 'endAbility';
}
var showOrange = function(context){
    console.log('showOrange');
    return 'endAbility'
}
var commandNotFound = require("./responses/command-not-found");

module.exports = [
  // Pure Response Example
  {
    name: "pureResponseExample",
    response: testEnd,
    commands: [
      /^(.*?(\btest\b)[^$]*)$/i
    ],
    highlightCommands:[
      'testEnd'
    ]
  },

  // Response Chain Example
  {
    name: "responseChainExample",
    response: testChain,
    commands: [
      /^(.*?(\btestchain\b)[^$]*)$/i
    ],
    highlightCommands:[
      'testChain'
    ]
  },

  // Reader Chain example
  {
    name: 'testReaderOne',
    response: 'read',
    commands: [/^(.*?(\bshow\b)[^$]*)$/i],
    responseList:
    [
      {
        name: 'showBanana',
        response: showBanana,
        commands: [/^(.*?(\bbanana\b)[^$]*)$/i],
        highlightCommands:[]
      },
      {
        name: 'showOrange',
        response: showOrange,
        commands: [/^(.*?(\borange\b)[^$]*)$/i],
        highlightCommands:[]
      },
    ],
    highlightCommands: [
      'Show Banana',
    ]
  },

  {
    name:'commandNotFound',
    response: commandNotFound,
    commands: [],
    highlightCommands: []
  }

]// responseList
