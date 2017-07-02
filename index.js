'use strict';

var Nightmare = require('nightmare');
new Nightmare()
  .goto('https://twitter.com/login')
  .type('input[class="js-username-field email-input js-initial-focus"]', 'lukenewben33k3@gmail.com') // Substitute with your username
  .type('input[class="js-password-field"]', 'college2011math') // Substitute with your password
  .click('button[class="submit EdgeButton EdgeButton--primary EdgeButtom--medium"]')

  .wait('span[class="ProfileCardStats-statValue"]')
  .screenshot('screen.png')
  .end()

  .run(function(err, nightmare) {
    if (err) {
      console.log(err);
    }
    console.log('Done.');
  });