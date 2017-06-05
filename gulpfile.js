const gulp = require('gulp'),
      fs = require('fs'),
      path = require('path'),
      contentful = require('contentful'),
      SPACE_ID = '4bfme0qry1sf',
      ACCESS_TOKEN = '87b291853592493032ed043722c08071bab837cec4ca251c65227a5e66ab86e7',
      SAVED_PAGE_DB_FILE = './db/contentfulPageContent.json';




const folder = {
  src: 'src/'
}

gulp.task('sync-pages', () => {
  const client = createClient();
  let db, token, syncPromise;

  fs.readFile(SAVED_PAGE_DB_FILE, function(err, data) {
    if(err) {
      return console.error(err);
    }

    client.getEntries({content_type: 'page'}).then((response) => {
      console.log(response);
      const writeableData = JSON.stringify(response.items);

      fs.writeFile(SAVED_PAGE_DB_FILE, writeableData,  function(err) {
         if (err) { return console.error(err); }

         console.log("Data written successfully!");
      });

    });

  });
});

function createClient() {
  const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
  });

  return client;
}
