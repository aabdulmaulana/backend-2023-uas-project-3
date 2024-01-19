// import database
const db = require('./database');

// membuat class News
class News {
  static all(callback) {
    db.query('SELECT * FROM news', (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }

  static create(data, callback) {
    db.query('INSERT INTO news SET ?', data, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }

  static update(id, data, callback) {
    db.query('UPDATE news SET ? WHERE id = ?', [data, id], (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }

  static destroy(id, callback) {
    db.query('DELETE FROM news WHERE id = ?', id, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }

  static find(id, callback) {
    db.query('SELECT * FROM news WHERE id = ?', id, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }

  static search(title, callback) {
    db.query('SELECT * FROM news WHERE title LIKE ?', [`%${title}%`], (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }

  static findByCategory(category, callback) {
    db.query('SELECT * FROM news WHERE category = ?', category, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }
}

// export class News
module.exports = News;
