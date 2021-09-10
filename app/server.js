const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.static('client'));
app.use(express.json())


app.get('/', (req, res) => {
  res.sendFile(__dirname + '../client/index.html')
});

app.post('/', (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tropicalenaturelle@gmail.com',
      pass: 'Milton@12019' 
    }
  })

  const mailOptions = {
    from: req.body.email,
    to: 'tropicalenaturelle@gmail.com',
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message,
    phone: req.body.number
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if(err){
      console.log(err);
      res.send('error');
    } else {
      console.log('Email sent successfully: ' + info.response);
      res.send('success')
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});