const configNodemailer = {
  account: {
    user: "kleber_lsgermano@hotmail.com",
    pass: "akbam25new"
  },
  smtp: {
    host: "smtp-mail.outlook.com", //smtp host of your email service
    port: 587
  },

  info: {
    from: '"Website form contact <kleber_lsgermano@hotmail.com>"', // sender address
    to: " <kleber_lsgermano@hotmail.com>, <kleber_lsg@hotmail.com>", // list of receivers
    subject: "New contact from the website"
  }
};

module.exports = configNodemailer;
