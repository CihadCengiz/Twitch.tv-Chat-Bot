require('dotenv').config();
const tmi = require('tmi.js');
let array = [];
const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.USERNAME,
		password: process.env.OAUTH,
	},
	channels: [ 'Videoyun' ]
});
client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase().includes('voyun1')) {
        array.push(message);
		client.say(channel, `Clap denied!`);
        console.log(array);
	}
});