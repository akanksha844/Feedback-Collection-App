const _ = require('lodash');
const PATH = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const { application } = require('express');
//const { application } = require('express');
const Survey = mongoose.model('surveys');



module.exports = app => {

    api.get('/api/surveys/thanks', requireLogin, async(req, res) => {

        const surveys = await Survey.find({ _user: req.user.id }).select()
        Survey.find({ _user: req.user.id });
        res.send(surveys);
    });

    app.post('/api/surveys/webhooks', (req, res) => {
        console.log(req.body);
        res.send('Thanks for voting!');

        const events = _.map(req.body, (event) => {
            const pathname = new URL(event.url).pathname;
            const p = new Path('/api/surveys/:surveyId/:choice');
            console.log(p.test(pathname));
            const match = p.test(pathname);
            if (match) {
                return { email: events.email, surveyId: match.surveyId, choice: match.choice }
            }
        });

        const compactEvents = _.compact(events);
        const uniqueEvents = _.uniqBy(compactEvents, 'emails', 'surveyId');
        console.log(uniqueEvents);
        res.send({});


    });



    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => { email })
            _user: req.user.id,
            dateSent: Date.now(),
        });


        app.post('/api/surveys/webhooks', (req, res) => {
            const p = new Path('/api/surveys/:surveyId/:choice');

            _.chain(req.body).map(({ email, url }) => {
                    const match = p.test(new URL(url).pathname);
                    if (match) {
                        return { email, surveyId: match.surveyId, choice: match.choice }
                    }
                })
                .compact().uniqBy('email', 'surveyId').each(({ surveyId, email, choice }) => {
                    Survey.updateOne({
                        id: surveyId,
                        recipients: {

                        }
                    })
                })

        })

        //great place to send an email!
        const mailer = new Mailer(survey, surveyTemplate);
        try {



            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();

            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }


    });
};