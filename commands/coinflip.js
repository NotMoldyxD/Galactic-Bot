module.exports = {
    name: 'coinflip',
    description: 'Flip a Coin',
    usage: 'coinflip',
    category: '😆**fun**😆',
    run: async (bot, message, args) => {
    let random = (Math.floor(Math.random() * Math.floor(2)));
    if(random === 0) {
      message.channel.send('Heads!');
    }
    else {
      message.channel.send('Tails!');
    }
  }
}

