// create or import the follwoing functions in the list
var heyChain = function(){
  console.log('ending chain');
  return false;
}

// Create the response List
var responseList = [
  {
    name:'heyChain',
    response: heyChain,
    commands:[
      /^(.*?(\bhey\b)[^$]*)$/i,
    ]
  },
  {
    name:'commandNotFound',
    response: function(){
      console.log('Command not found in chain');
      return responseList;
    },
    commands: [],
  }
]

// Make the Test-chain function
module.exports = function(){
  console.log('make it chain');
  return responseList;
};
