export default async (req, res) => { 
    if (!req.body) {
        console.log("Erro");
        res.status(401).send();
    }
    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        port: process.env.NEXT_PRIVATE_PORT_SMTP,
        host: process.env.NEXT_PRIVATE_HOST_SMTP,
        auth: {
            user: process.env.NEXT_PRIVATE_EMAIL_SMTP,
            pass: process.env.NEXT_PRIVATE_SENHA_SMTP,
        },
        secure: true
    });

    let mailData = {
        from: 'caiomoizess2020@gmail.com',
        to: 'engcaiomoizes@gmail.com',
        subject: `Mensagem de ${req.body.nome}`,
        text: req.body.mensagem + " | Enviado de: " + req.body.email
    };

    await new Promise((resolve, reject) => {
        transporter.sendMail(mailData, function(err, data) {
            if (err) {
                console.log("Erro: " + err);
                reject(err);
            } else {
                console.log("E-mail enviado com sucesso!");
                resolve(data);
            }
        });
    });
    
    res.status(200).send();
}