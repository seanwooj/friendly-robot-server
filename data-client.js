const fs = require('fs');
const SAVED_PAGE_DB_FILE = './db/contentfulPageContent.json';

class DataClient {
  constructor() {
    this.fetchData = this.fetchData.bind(this);
    this.getDataByPath = this.getDataByPath.bind(this);
  }

  fetchData() {
    return new Promise((resolve, reject) => {
      fs.readFile(SAVED_PAGE_DB_FILE, function(err, data) {
        if(err) {
          reject(err);
        }

        resolve(JSON.parse(data));
      });
    });
  }

  getDataByPath(path) {
    return new Promise((resolve, reject) => {
      //
    })
  }
}

export default DataClient;
