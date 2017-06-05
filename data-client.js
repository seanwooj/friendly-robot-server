const fs = require('fs');
const SAVED_PAGE_DB_FILE = './db/contentfulPageContent.json';

class DataClient {
  constructor() {
    this.fetchPages = this.fetchPages.bind(this);
    this.fetchPage = this.fetchPage.bind(this);
  }

  fetchPages() {
    return new Promise((resolve, reject) => {
      fs.readFile(SAVED_PAGE_DB_FILE, function(err, data) {
        if(err) {
          reject(err);
        }

        resolve(JSON.parse(data));
      });
    });
  }

  fetchPage(vanityUrl) {
    return this.fetchPages().
      then((pages) => {
        return pages.filter((page) => { return page.fields.vanityUrl === vanityUrl});
      })
  }

}

export default DataClient;
