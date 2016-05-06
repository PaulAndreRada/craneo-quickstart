var responseChain = function( context ){

  // do your response’s action
  console.log('A Response chain has started' );

  // Return the following response objects to the bot in the same array format as the response list
  var responseList = [
    {
      name: 'foo',
      response: function( context ){
          console.log('foo, ending chain');
          return false;
      },
      commands: [ /^(.*?(\bfoo\b)[^$]*)$/i ]
    },
    {
      name: 'bar',
      response: function( context ){
        console.log('bar, ending chain');
        return false;
      },
      commands: [/^(.*?(\bbar\b)[^$]*)$/i]
    },
    {
      name: 'commandNotFound',
      response: function(){
        console.log('command not found in chain');
        return responseList;
      },
      commands: [],
    }
  ];

  return responseList;
}

module.exports = responseChain;
