# Code Citations

## License: unknown
https://github.com/follow-prince/astro-boy/tree/1e75a0af99b65ee6278537762fe5979b311a7232/server.js

```
express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser
```


## License: Apache_2_0
https://github.com/AutomateThePlanet/test-login-app/tree/f558c7575f3fd2e57bc37705cbe884693c6f999b/server.js

```
post('/request-password-reset', (req, res) => {
  const { email } = req.body;
  const user = users.find(u => u.email === email);

  if (!user) {
    return res
```


## License: unknown
https://github.com/workytfr/forms-talkw/tree/9590f09f1231014cd6c3d60698510988392d9099/server.js

```
= nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com'
```

