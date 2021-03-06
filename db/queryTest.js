var redis = require('redis');
var bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

var client = redis.createClient();

// async sample redis query
return client.hmgetAsync('session-9978916', 'userId', 'serverIP')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.log('ERROR: ', err);
  })

// returns [ '9978918', '172.16.254.7' ]

// invalid queries and empty fields return [ null, null ]






