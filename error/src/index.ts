import * as request from 'superagent';

request
  .get('/demo')
  .end((err, res) => {
    // code
  });

