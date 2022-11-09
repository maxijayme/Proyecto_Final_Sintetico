const { transport } = require('../mailer')

const {
    BOT_EMAIL,
  } = process.env;


module.exports.sendRegistrationEmail = (name, lastName, userName, email) => {
    transport.sendMail({
        
        from:  BOT_EMAIL,
        to: email,
        subject: "Registro exitoso ✨✅",
        html: 
        `<h1>Felicidades ${userName}❕❕ Tu registro ha sido completado con exito</h1>
        <h1>Que es Sintetico⚽?</h1>
        <h2>Bienvenido a la web de TUS canchas. En Sintetico podras hacer reservas al instante ⌚ y poner en alquiler tus canchas en minutos 💎</h2>
        <h2>Queres saber mas acerca de nosotros?</h2> <a href= "http://localhost:3000/about">Click Aqui</a>
        <h2>Queres empezar a alquilar?</h2> <a href= "http://localhost:3000/">Click Aqui</a>`
        
        
        
        
    })
    .catch((err) => console.log(err))
}

module.exports.sendReservationEmail = (dataMail) => {

    let text = ``
    for (let i = 0; i < dataMail.length; i++) {
        text += 
       `<h2>Fecha: ${dataMail[i].date}</h2>
        <h2>Hora: ${dataMail[i].hour}</h2>
        <h2>Cancha: ${dataMail[i].fieldName}</h2>
        <h3>-----------------------------------------</h3>`
    }

     transport.sendMail({
        
        from:  BOT_EMAIL,
        to: dataMail[0].userEmail,
        subject: "Reserva completada ⚽✅",
        
        html: 
        `<h1>Felicidades ${dataMail[0].userName}❕❕ Ya tienes tus reservas listas</h1>
         <h1>${text}</h1>
         <h2>Ahora puedes revisar todas tus reservas en el perfil de la pagina o ingresando al siguiente link<h2> <a href="http://localhost:3000/"> Click aquí</a>`
         
        
        
    })
    .catch((err) => console.log(err))
}