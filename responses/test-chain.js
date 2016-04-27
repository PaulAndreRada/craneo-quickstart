var heyChain = function(){
  console.log('ending chain');
  return 'endAbility';
}

var responseList = [
  {
    name:'heyChain',
    response: heyChain,
    commands:[
      /^(.*?(\bhey\b)[^$]*)$/i,
    ],
    "highlightCommands": [
      "Hey you"
    ]
  }
]


module.exports = function(){
  console.log('make it chain');
  return responseList;
};
