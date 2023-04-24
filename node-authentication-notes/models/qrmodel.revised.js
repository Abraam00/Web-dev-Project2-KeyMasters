const mongoose = require('mongoose');
//change this to be our certain url config 
//mongoose.connect('mongodb://localhost:27017/')

//inputting this on the admin page will generate an _id code automatically to be used as unique identifier in URL
const QrSchema = mongoose.Schema({
    url: {  //prepopulated by admin for each created URL and use _id as the QR specific url location
        type: String,
        required: true
    },
    description: { //optional content field read from JSON load (maybe clue, maybe empty field)
        type: String,
        required: true
    }/*,
    body: { //this probably not necessary
        type: String
    }*/
}, {
    timestamps: true
});

const URL = mongoose.model('URL', QrSchema);
async function verify_qr_url(qrCodeUrl) {
    try {
        const url = await URL.findOne({ url: qrCodeUrl });
        if (url) {
            console.log('Qr code Url matches data base URL: ${url.url}');
            return true;
        }
        console.log('Qr code Url is not a match with any databse URL');
        return false;
    } catch (err) {
        console.error(err);
        return false;
    }
}
const fs = require('fs');
// change the json file to whatever the sample is 
// const qrCodes = JSON.parse(fs.readFileSync('sampledata.json'));
// //check the qe dode url against database 

// qrCodes.forEach(qrCodeUrl => verify_qr_url(qrCodeUrl));

module.exports = mongoose.model('QR', QrSchema);
