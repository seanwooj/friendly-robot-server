import express from 'express';
import morgan from 'morgan';
import DataClient from './data-client';


const app = express();
const dataClient = new DataClient();

app.set('port', (process.env.API_PORT || 3001));

app.get('/api/pages', (req, res) => {
  // console.log(req.query);
  let fetchedPromise;

  if(req.query.vanityUrl) {
    fetchedPromise = dataClient.fetchPage(req.query.vanityUrl);
  } else {
    fetchedPromise = dataClient.fetchPages();
  }

  fetchedPromise.then((data) => {
    // console.log(data);
    res.json(data)
  }).catch((error) => {
    res.status(500).json({
      success: false,
      message: 'Something went wrong. get mad at sean for a useless error message',
      error: error,
    });
  })
});


export default app;
