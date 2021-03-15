const client = require('../bot').lineClient;

function followHandler(event) {
    if (event.source.type == "user") {
        let userId = event.source.userId;
        client.getProfile(userId)
            .then((profile) => {
                let userName = profile.displayName;
                let reply = {
                    type: "text",
                    text: `Hi ${userName}!\nI am Yi-Chin, Shang. This is a linebot for you to know me better.\nPlease select the options in the menu below or send me any messages. There may be some surprises for you!`
                };
                client.replyMessage(event.replyToken, reply);
            }).catch((err) => {
                console.log(err);
            });
    }
}

module.exports = followHandler;