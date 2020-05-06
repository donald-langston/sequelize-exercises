

const db = require('./models/index');
let prompt = require('prompt-promise');
let res = [];

prompt('Album name? ')
.then(function(val) {
    res.push(val);
    return prompt('Album year? ')  
})
.then(function(val) {
    res.push(val);
    return prompt('Artist ID? ');
})
.then(function(val) {
    res.push(val);
    db.album.create({artist_id: res[2], release_year: res[1], album_name: res[0]})
    .then(function(result) {
        console.log(`Created album with ID ${result.dataValues.id}.`);
        prompt.done();
    });
})
.catch(function(err) {
    console.log('error:', err.stack);
    prompt.finish();
});

