const line = require('@line/bot-sdk');

const clientSecret = process.env.LINE_CLIENT_SECRET;
const clientToken = process.env.LINE_CLIENT_TOKEN

const config = {
    channelAccessToken : clientToken, 
    channelSecret: clientSecret
};

const client = new line.Client(config);
const middleware = line.middleware(config);

const richMenuId = 'richmenu-2f1a19a4c04a550c6d715214517a3110';
client.setDefaultRichMenu(richMenuId);

module.exports = {
    middleware : middleware,
    lineClient : client
};
