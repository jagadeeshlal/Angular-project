var express = require("express");
var router = express.Router();
var mailer = require("./mailer");

router.post("/", function(req, res) {
  console.log('HITTING | INSIDE ENDPOINT /mailer/sendMail |');
  var parameters = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    contactNumber: req.body.contactNumber
  };
  console.log('COLLECTED PARAMETERS | ',parameters)
  mailer.sendMail(parameters, function(err, response) {
    if (err) {
      console.log('HITTING | INSIDE ENDPOINT /mailer/sendMail | ERROR');
      res.setHeader("reason", "failed");
      res.status(401).json({
        status: 401,
        message: "could not send email"
      });
    } else {
      console.log('HITTING | INSIDE ENDPOINT /mailer/sendMail | SUCCESS');
      res.status(200).json({
        status: 200,
        message: "mail send successfully!!"
      });
    }
  });
});

module.exports = router;
