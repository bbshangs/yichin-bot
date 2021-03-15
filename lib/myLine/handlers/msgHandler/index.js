const client = require('../../bot').lineClient;

const textHandler = require('./textHandler').textHandler;
const stickerHandler = require('./stickerHandler').stickerHandler;

function messageHandler(event){
    switch(event.message.type){
        case "text":
            return textHandler(event);
            break;
        // case "image":
        case "sticker":
        	return stickerHandler(event);
        	break;
        default:
            return Promise.resolve(null);
    }
}

module.exports = messageHandler;
