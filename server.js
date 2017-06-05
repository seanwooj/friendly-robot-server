import express from 'express';
import morgan from 'morgan';
import DataClient from 'data-client';


const app = express();
const dataClient = new DataClient();

app.set('port', (process.env.API_PORT || 3001));

// app.get('/api/check_token', (req, res) => {
//   const token = extractToken(req);
//
//   if (token) {
//     if (token === API_TOKEN) {
//       return res.json({ valid: true });
//     } else {
//       return res.json({ valid: false });
//     }
//   } else {
//     return res.status(400).json({
//       valid: false,
//       error: 'No token found in `Authorization` header',
//     });
//   }
// });
//
// app.get('/api/albums', authenticatedRoute, (req, res) => {
//   const albumIds = req.query.ids.split(',');
//
//   getAlbums(albumIds).then((albums) => (
//     res.json(albums)
//   )).catch((error) => (
//     res.status(500).json({
//       success: false,
//       message: 'There was an error when interfacing with Spotify',
//       error: error,
//     })
//   ));
// });
app.get('/api/pages', (req, res) => {
  dataClient.
});


export default app;
