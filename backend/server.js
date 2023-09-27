const express = require("express");
const morgan = require("morgan");
const db = require('./utils/db');
const cookieParser = require('cookie-parser')


// ===== Constants ===== //
const app = express();
const PORT = process.env.PORT || 8080;


// ===== Middlewares ===== //
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cookieParser())

// ===== Routes ===== //
/**
 * @method GET
 * @route /
 * @description Root route
 */
app.get('/', (req, res) => {
    console.log(req.cookies);
    // console.log(req.get('Cookie'));

    // res.setHeader('Set-Cookie', 'user-id=1; Max-Age=1000') //set cookies

    res.send('server is up!');
});

// Mounted Routes ========================== //
app.use('/api/auth', require('./routes/auth'))



// ===== Main ===== //
db();
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));