const client = require('../../bot').lineClient;

function stickerHandler(event) {
	switch(event.type.packageId) {
		case "11537":
		case "11538":
		case "11539":
			return client.replyMessage(event.replyToken, 
			    {
			        type: 'sticker',
			        packageId: event.type.packageId,
			        stickerId: event.type.stickerId
			    });
			break;
		default:
			// var pr = getRandomInt(3) + 11537;
			var ps = Math.floor(Math.random() * (52114149 - 52114110 + 1) + 52114110);
			return client.replyMessage(event.replyToken,
				{
					type: 'sticker',
					packageId: "11539",
					stickerId: ps
				});
	}
}

module.exports = {
    stickerHandler: stickerHandler
};