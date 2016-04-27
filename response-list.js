var testEnd = require("./responses/test-end");
var testChain = require("./responses/test-chain");
var commandNotFound = require("./responses/command-not-found");

module.exports = [
  {
    "name": "testchain",
    "response": testEnd,
    "commands": [
      /^(.*?(\btest\b)[^$]*)$/i
    ],
    "highlightCommands":[
      'testEnd'
    ]
  },
  {
    "name": "testchain",
    "response": testChain,
    "commands": [
      /^(.*?(\btestc\b)[^$]*)$/i
    ],
    "highlightCommands":[
      'testEnd'
    ]
  },
  {
    "name":'commandNotFound',
    "response": commandNotFound,
    "commands": [],
    "highlightCommands": []
  }
]
