const client = require('../../bot').lineClient;

const about_me = require('../../../../replyMsg/about_me.json');
const more_about_me = require('../../../../replyMsg/more_about_me.json');
const education = require('../../../../replyMsg/education.json');
const internship = require('../../../../replyMsg/internship.json');
const leadership1 = require('../../../../replyMsg/leadership1.json');
const leadership2 = require('../../../../replyMsg/leadership2.json');
const skills = require('../../../../replyMsg/skills.json');
const info = require('../../../../replyMsg/info.json');

function textHandler(event) {
	switch(event.message.text) {
		case "About Me":
	  		return client.replyMessage(event.replyToken, [about_me, more_about_me]);
	  		break;
	  	case "Education":
	  		return client.replyMessage(event.replyToken, [education, more_about_me]);
	  		break;
	  	case "Internship":
	  		return client.replyMessage(event.replyToken, [internship, more_about_me]);
	  		break;
	  	case "Leadership Experience":
	  		return client.replyMessage(event.replyToken, [leadership1, leadership2, more_about_me]);
	  		break;
		case "Skills":
			return client.replyMessage(event.replyToken, skills);
			break;
		case "Contact Me":
			return client.replyMessage(event.replyToken, info);
			break;
		default:
			const echo = { 
				"type": "text", 
				"text": "Please select the options in the menu below or send me other messages." 
			};
            return client.replyMessage(event.replyToken, echo);
	}

}

module.exports = {
    textHandler: textHandler
};