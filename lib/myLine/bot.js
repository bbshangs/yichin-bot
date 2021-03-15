const line = require('@line/bot-sdk');

// const clientSecret = process.env.LINE_CLIENT_SECRET;
// const clientToken = process.env.LINE_CLIENT_TOKEN
const clientSecret = "93c5e1c73bdcce298ad527d00e7b8928";
const clientToken = "754L/hRQgO4f3hFTSzPkPJGfWYeFKidxAYQXVLfEH5B9Mo7dC/GI9TTcNKAfGmOXZep0ScEp2/1GoIezuYSP5+vaAJJxP7rv7S/HtXXrjZeZQzJMgIaXn2+ypkSSn8PirMr042mLnxKPk/9wO4ZOoAdB04t89/1O/w1cDnyilFU=";

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
