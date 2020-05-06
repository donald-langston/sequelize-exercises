const db = require('./models/index');
let prompt = require('prompt-promise');
let res = [];

prompt('Track name? ')
.then(function(val) {
    res.push(val);
    return prompt('Album ID? ')  
})
.then(function(val) {
    res.push(val);
    return prompt('Track Duration? ');
})
.then(function(val) {
    res.push(val);
    db.track.create({track_name: res[0], album_id: res[1], duration: res[2]})
    .then(function(result) {
        console.log(`Created track with ID ${result.dataValues.id}.`);
        prompt.done();
    });
})
.catch(function(err) {
    console.log('error:', err.stack);
    prompt.finish();
});

