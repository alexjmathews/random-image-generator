var jimp = require("jimp");
var fs = require('fs')
var AWS = require('aws-sdk');
var uuid = require('uuid')
AWS.config.region = 'us-west-2';
var s3bucket = new AWS.S3({
    params: {
        Bucket: 'fusiform-avatars'
    }
});




generateGoodCenter(function(x, y) {
    var width = 100;
    var height = 100;

    var adjX = x + 350;
    var adjY = y + 350;
    console.log(adjX);
    console.log(adjY);
    adjX = Math.floor(adjX - width / 2);
    adjY = Math.floor(adjY - height / 2);
    jimp.read("avatarSource.png", function(err, lenna) {
        if (err) throw err;
        lenna.crop(adjX, adjY, width, height).write('avatar.jpg'); 
        // .getBuffer("image/jpeg", function(err, result) {
        //     // var id = uuid.v4()
        //     // var params = {
        //     //     Key: id + ".jpg",
        //     //     Body: result
        //     // };
        //     // s3bucket.upload(params, function(err, data) {
        //     //     if (err) {
        //     //         console.log("Error uploading data: ", err);
        //     //     } else {
        //     //         console.log("Successfully uploaded data to myBucket/ " + id);
        //     //     }
        //     // });
        // }); // save
    });

});

function generateGoodCenter(callback) {
    var x;
    var y;
    do {
        x = randomInt(-300, 350);
        y = randomInt(-300, 350);
    }
    while (!isGood(x, y));
    callback(x, y);
}

function isGood(x, y) {
    var radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    //console.log(radius);
    if (radius < 300 && radius > 35) {
        return true;
    } else {
        return false;
    }
}

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
