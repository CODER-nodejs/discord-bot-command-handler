module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(client, message, args){
const apiPing = Math.round(message.client.ping);
const responseTime = Math.round(Date.now() - message.createdTimestamp); 

        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
}
