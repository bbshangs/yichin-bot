const client = require('./bot').lineClient;
const followHandler = require('./handlers/followHandler');
const messageHandler = require('./handlers/msgHandler');
// const joinHandler = require('./handlers/joinHandler');



// const richMenuId = 'richmenu-a8a39934c043b4279edcbc2f4ad6c1ce';
// client.setDefaultRichMenu(richMenuId);

// event type : message follow unfollow join leave memberJoined memberLeft postback beacon accountLink things
// message type : text image video audio file location sticker 
function handleEvent(event) {
	console.log("get", event.type, "event!");
    switch(event.type){
        case "message":
            return messageHandler(event);
            break;
        case "follow":
        	return followHandler(event);
        	break;
        // case "join":
        // case "memberJoined":
            // return joinHandler(event);
        default:
            return Promise.resolve(null);
    }
}

module.exports = handleEvent;
