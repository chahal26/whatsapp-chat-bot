const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    const content = message.body

    if(content === "hi"){
        client.sendMessage(message.from, "Hi, Thanks for Contacting Webroot Technologies. How Are You?");
    }else if(content == "good"){
        client.sendMessage(message.from, "Good to know that, How may I help you?");
    }else{
        client.sendMessage(message.from, "Didn't get your point");
    }
});

client.initialize();
 