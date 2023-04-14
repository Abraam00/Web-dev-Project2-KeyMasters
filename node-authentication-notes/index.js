const express = require("express");
const mongoose = require("mongoose");
const app = express();
// const cors = require('cors');
// const morgan = require('morgan');
// const authRoute = require('./routes/auth');
const qrRoute = require('./routes/qr.revised.route.js');
const leaderboardRoute = require('./routes/leaderboard.revised.route.js');

const dbURI = "mongodb://127.0.0.1/pies";
app.use(express.json());

// app.use(morgan('dev'));
// app.use(cors());
// app.use('/api/auth', authRoute);
app.use('/api', qrRoute);
app.use('/api', leaderboardRoute);

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on("error", (err) => { console.error(err) })
db.once("open", () => { console.log("DB started successfully") })

app.listen(2400, () => { console.log("Server started: 2400") })