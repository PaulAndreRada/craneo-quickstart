var Craneo = require("craneo");
var defaultList = require('./response_list/default-list');

// Create a bot instance
var myBot = Craneo({ responseList: defaultList });

// Create your data object
var myData  = {
  userId : "RX78G",
  name:  "Amuro Ray",
  type: "Gundam"
}

// Call this function whenever the bot needs to respond
// Send it a message for it to decipher and
// Any arguments you want to pass to the response
myBot.listen('arise', myData );
/* example responses

  * Basic response
  "hello" or "arise"

  * Chain response
  "chain" followed by "foo" or "bar"

  * Read Response
  "show invaders" or "show breakout"

*/
