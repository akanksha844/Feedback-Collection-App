const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('/config/keys');
require('./services/passport');
require('./models/User');
require('./models/Survey');


mongoose.connect(keys.mongoURI);
const app = express();


app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]

    })
);

app.use(passport.initialize());
app.use(passport.session());

// clientId
//clientSecret
//authRoutes(app);
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);


/*app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});   */



if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
const PORT = process.env.PORT || 5000;
app.listen(5000);