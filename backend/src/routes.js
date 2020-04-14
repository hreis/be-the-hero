const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const { celebrate, Segments, Joi } = require('celebrate');
const nodemailer = require('nodemailer');

const routes = express.Router();

routes.get("/", (req, res) => {
    res.send("Welcome");
});

routes.post(("/sendmail"), (req, res) => {
    console.log("request came");

    let user = req.body;
    sendMail(user, info => {
        console.log(`the mail has benn send and the id is ${info.messageId}`);
        res.send(info);
    });
});

async function sendMail(user, callback) {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: details.email,
            pass: details.password
        }
    });

    let mailOptions = {
        from: "hugo.carvalho.reis@gmail.com",
        to: user.email,
        subject: "welcome blabla",
        html: `<h1>${user.name}</h1>`
    };

    let info = await transporter.sendMail(mailOptions);

    callback(info);
};

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}) , OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}) , ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number().required(),
    })
}) ,IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}) , IncidentController.delete);

module.exports = routes;