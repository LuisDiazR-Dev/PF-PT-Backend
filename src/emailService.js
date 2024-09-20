const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // Usa tu servicio de correo
  auth: {
    user: 'henryproject20@gmail.com',
    pass: 'mpxr yepe hzbb zoas'
  }
});

const sendWelcomeEmail = (toEmail) => {
  const mailOptions = {
    from: 'henryproject20@gmail.com',
    to: toEmail,
    subject: 'Bienvenido al Proyecto Final de Henry',
    text: '¡Bienvenido al Proyecto Final de Henry! Esperamos que disfrutes de la plataforma.'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error al enviar el correo:', error);
    } else {
        console.log(`Correo de bienvenida enviado a: ${toEmail}`); // Mensaje de éxito
      console.log('Correo enviado:', info.response);
    }
  });
};

module.exports = {
  sendWelcomeEmail
};