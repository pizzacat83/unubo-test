const {WebClient, RTMClient} = require('@slack/client');

const slack = new WebClient(process.env.SLACK_TOKEN);
const rtm = new RTMClient(process.env.SLACK_TOKEN);

rtm.on('message', (message) => {
    if(message.text.includes('すし')) {
        slack.chat.postMessage({
            channel: process.env.CHANNEL_LAB,
            text: ':koresushi:'
        });
    }
});

rtm.start();
console.log('start');