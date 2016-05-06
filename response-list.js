
// responses
var testEnd = require("./responses/test-end");
var testChain = require("./responses/test-chain");
var showBanana = function(context){
    console.log('showBanana');
    return false;
}
var showOrange = function(context){
    console.log('showOrange');
    return false;
}
var commandNotFound = require("./responses/command-not-found");

module.exports = [
  // Pure Response Example
  {
    name: "pureResponseExample",
    response: testEnd,
    commands: [
      /^(.*?(\btest\b)[^$]*)$/i
    ]
  },

  // Response Chain Example
  {
    name: "responseChainExample",
    response: testChain,
    commands: [
      /^(.*?(\btestchain\b)[^$]*)$/i
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
      },
      {
        name: 'showOrange',
        response: showOrange,
        commands: [/^(.*?(\borange\b)[^$]*)$/i],
      },
    ]
  },

  {
    name:'commandNotFound',
    response: commandNotFound,
    commands: []
  }

]// responseList
