import session from 'express-session';
import * as redis from 'redis';
import connectRedis from 'connect-redis';

import config from './config';

let RedisStore = connectRedis(session);
let redisClient = redis.createClient();

redisClient.on('error', function (err) {
    console.log('Could not establish a connection with redis. ' + err);
});

redisClient.on('connect', function (err) {
    console.log('Connected to redis successfully');
});


const sessionOptions = {
    secret: "complex_password_at_least_32_characters_long",
    name: "edusess",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: config.debug ? false : true,
        secure: config.debug === false,
    },
};

export default sessionOptions;
